// ajax 返回的code类型
export const RET_CODE_MAP = {
  OK: 0 // 成功,
}

export const YES_OR_NO = {
  YES: 1,
  NO: 0
}

//性别
export const SEX_TYPE_MAP = {
  UNKNOWN: 0, //保密
  MALE: 1, //男
  FEMALE: 2 //女
}

//用户商务类型
export const BUSINESS_TYPE_MAP = {
  CROWD: 0, //众包
  COMPANY: 1, //本公司
  EPIBOLY: 2 //外包公司
}

//用户角色类型
export const ROLE_TYPE_MAP = {
  SUPERADMIN: 0, //超级管理员
  COMMONADMIN: 1, //（承包商）管理员
  PRIMARYAUDIT: 2, //初级初审
  SENIORAUDIT: 3, //高级审核
  FINALAUDIT: 4, //最终审核
  DATATAG: 5, //标注人员
  CHARGER: 6 //小组长
}

//图片标注类型
export const PIC_TAG_TYPE_MAP = {
  POINT: 1, //点
  LINE: 2, //线
  EXTENT: 4, //矩形
  POLYGON: 8, //多边形
  SQUARE: 16 //正方形
}

//任务标注类别
export const TASK_TAG_TYPE_MAP = {
  PICMARK: 1, //图片标注
  VIDEOMARK: 2, //简单视频标注
  AUDIOMARK: 4, //语音标注
  TEXTMARK: 8, //文本/NLP标注
  TRACEMARK: 16, //视频跟踪标注
  PICFILTER: 32 //图片筛选
}

//任务状态
export const TASK_STATUS_MAP = {
  CREATE: 0, //新建
  ASSIGNED: 1, //任务已分发
  DOING: 2, //任务领取完成
  FINISHED: 3 //任务已完成
}

//数据审核状态
export const AUDIT_STATUS_MAP = {
  AUDITFAIL: 0, //审核不通过
  AUDITPASS: 1, //审核通过
  UNAUDITED: 2 //未审核
}

//数据审核类型
export const AUDIT_TYPE_MAP = {
  PRIMARYAUDIT: 0, //初级审核
  SENIORAUDIT: 1, //高级审核
  FINALAUDIT: 2 //最终审核
}

//数据标注状态
export const TAG_STATUS_MAP = {
  TAG: 0, //未审核
  AUDITPASS: 1, //审核合格
  AUDITFAIL: 2 //审核不合格
}
//属性控件类型
export const CONTROL_TYPE_MAP = {
  TEXTBOXCONTROL: 0, //文本框
  SELECTCONTROL: 1, //下拉列表
  RADIOCONTROL: 2, //单选按钮
  CHECKBOXCONTROL: 3, //复选按钮
  TEXTAREACONTROL: 4, //文本域
  LINKCONTROL: 5, //关联控件
  LABELCONTROL: 6 //标签控件
}
