import { ref, Ref, toRef, toRefs } from "vue";
import { _, ikStore } from "iking-utils-pro";
import axios from "axios";
import { TList } from "../types";

const getSearchParam = (key: string) => {
  const searchStr = window.location.search;
  const objParams = new URLSearchParams(searchStr);
  return objParams.get(key);
};

const setNormalDomainHeader = (headers: any) => {
  const domain = ikStore.local.getItem("x_domain");
  if (!domain) {
    //
    return;
  }
  headers["X-DOMAIN"] = domain;
};

const setDomainHeader = (headers: any) => {
  const domain = getSearchParam("domain");
  if (domain) {
    headers["X-DOMAIN"] = domain;
    const code = getSearchParam("code");
    if (domain === "APPLICATION") {
      //
      headers["X-APP"] = code;
    }
  } else {
    setNormalDomainHeader(headers);
  }

  // 租户信息
  const tenantCode = ikStore.local.getItem("tenant")?.code;
  if (tenantCode) {
  }
};

export const usePickerData = (apiRef: any, props?: any) => {
  // 层级列表
  const bannerList: Ref<TList[]> = ref([]);
  const handData = async (
    orgId?: string,
    name?: string
  ): Promise<{
    groupList: any[];
    roleList: any[];
    postList: any[];
    userList: any[];
    rootOrganization: any;
    rootDepartment: any;
  }> => {
    const { url, methods, headers, param: params } = apiRef.value || {};
    const param = {
      ...(params || {}),
      parentDepartmentId: orgId || "",
      name: name || "",
      rootDepartmentOnly: props.rootDepartmentOnly,
      dataScopeOnly: props.dataScopeOnly,
    };

    // const res = await fetch(url, {
    //   method: methods,
    //   headers: {
    //     "Content-Type": "application/json;charset=UTF-8",
    //     ...headers
    //   },
    //   body: JSON.stringify(param)
    // })
    // const { success, data } = await res.json()

    const config = {
      method: methods,
      url,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        ...headers,
      },
      data: JSON.stringify(param),
    };

    setDomainHeader(config.headers);
    const res = await axios(config);
    const { success, data } = res.data;
    if (!success)
      return {
        groupList: [],
        roleList: [],
        postList: [],
        userList: [],
        rootOrganization: {},
        rootDepartment: {},
      };
    const {
      departments,
      roles,
      posts,
      users,
      rootOrganization,
      rootDepartment,
    } = data;
    const root = rootOrganization || rootDepartment;
    if (bannerList.value.length === 0) {
      bannerList.value[0] = props.org
        ? {
            ...props.org,
            id: props.elementId,
            elementType: props.org?.elementType?.toLocaleUpperCase(),
          }
        : {
            ...root,
            id: root.elementId,
          };
    }

    return {
      groupList: _.cloneDeep(departments),
      roleList: _.cloneDeep(roles),
      postList: _.cloneDeep(posts),
      userList: _.cloneDeep(users),
      rootOrganization,
      rootDepartment,
    };
  };

  const handSetChild = (item: any, name: string) => {
    handData(item?.elementId, name);
  };

  return {
    handData,
    handSetChild,
    bannerList,
  };
};
