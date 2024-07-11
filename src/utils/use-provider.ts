import {computed, inject, Ref} from "vue";

const useProvider = (props: any) => {
    const pLoadUrl: Ref<string> | undefined = inject('loadUrl')
    const cLoadUrl = computed(() => props.loadUrl || props.fileUrl || pLoadUrl?.value)

    const pUploadUrl: Ref<string> | undefined = inject('uploadUrl')
    const cUploadUrl = computed(() => props.action || props.uploadUrl || pUploadUrl?.value)

    const pToken: Ref<string> | undefined = inject('token')
    const cToken = computed(() => props.token || pToken?.value)

    const pOnlyofficeConfig: Ref<string> | undefined = inject('onlyofficeConfig')
    const cOnlyofficeConfig = computed(() => props.onlyofficeConfig || pOnlyofficeConfig?.value)

    const pUserInfo: Ref<string> | undefined  = inject('userInfo')
    const cUserInfo = computed(() => props.userInfo || pUserInfo?.value)

    return {
        cLoadUrl,
        cUploadUrl,
        cToken,
        cOnlyofficeConfig,
        cUserInfo
    }
}

export default useProvider