export const useState = (props: any) => {
    return {
        // ================all================
        nodeType: {
            发起人节点: "INITIATOR",
            审批节点: "APPROVE",
            抄送节点: "CARBON_COPY",
            办理节点: "DISPOSE",
            分支节点: "BRANCH",
            条件节点: "CONDITION",
            结束节点: "END",
            并行分支: "PARALLEL",
            子流程: 'SUB_PROCESS',
            ...props.defaultNodeType,
        },
        defaultFile: {
            id: "id", // id
            parallelInstances: "parallelInstances", // 并行分支
            backToInstanceNodeName: 'backToInstanceNodeName', // 回退节点名称
            backToRecordNodeName: 'backToRecordNodeName', // 回退记录节点名称 - old
            nodeId: "sortOrder",// 	排序值
            nodeType: "type",// 节点类型
            nodeTypeName: "name",// 节点名称
            approveStatus: "status",
            approveStatusName: "statusName",
            approveType: "approveType",// 审批对象类别名称
            multiExecutorType: "multiExecutorType",// 多人审批方式类型
            approveTypeName: "approveTypeName", // 审批对象类别名称
            multiExecutorTypeName: "multiExecutorTypeName",// 多人审批方式名称
            approvalCategory: "approvalCategory", // 审批类型
            isShowAdd: "initiatorSpecify", //是否显示添加按钮
            isShowAddCopy: 'initiatorSpecifyCarbonCopy',// 是否显示抄送人添加按钮
            executorEmpty: "executorEmpty", //实际审批人是否为空
            executorEmptyStrategy: "executorEmptyStrategy", //为空时的审批类型
            reserveExecutorUsers: "reserveExecutorUsers", //executorEmptyStrategy为指定审批人时
            approvePersonList: "executorUsers", // 审批执行者用户信息
            initiatorSpecifiedScope: "initiatorSpecifiedScope", //默认自选的人
            initiatorSpecifiedScopeType: "initiatorSpecifiedScopeType", //自选方式
            singleApproval: "singleApproval", //是否单选
            originator: "username",
            ...props.defaultFieldMap,
        },
        // ================approval================
        statusWithoutApprover: {
            自动通过: "AUTO_PASS",
            自动拒绝: "AUTO_REJECT",
            自动转交管理员: "TRANSMIT_TO_MANAGER",
            指定人员审批: "SPECIFIED_USER",
            ...props.statusWithoutApprover,
        },
        multiple: false,
        chooseType: [],
        // ================detail================
        statusOption: {
            发起: "INITIATE",
            等待: "WAIT",
            同意: "PASS",
            撤销: "REVOKE",
            拒绝: "REJECT",
            转交: "TRANSFER",
            加签: "APPEND",
            退回: "BACK",
            评论: "COMMENT",
            待执行: "WAITING",
            执行中: "RUNNING",
            ...props.defaultStatus,
        },
        listData: [],
    }
}

export const getTypeIcon = (state: any, type: any, approvePersonList?: any) => {
    let className = "";
    switch (type) {
        case state.nodeType.审批节点:
            if (approvePersonList && approvePersonList.length == 1) {
                className = "ikapprove-ziyuan";
            } else {
                className = "ikapprove-shenpi";
            }
            break;
        case state.nodeType.办理节点:
            className = "ikapprove-bianji";
            break;
        case state.nodeType.抄送节点:
            className = "ikapprove-chaosong";
            break;
        case state.nodeType.并行分支:
            className = "ikapprove-fenzhi";
            break;
        case state.nodeType.子流程:
            className = "ikapprove-ziliucheng1";
            break;
        default:
            className = "ikapprove-ziyuan";
    }
    return `ikapprove ${className}`;
};