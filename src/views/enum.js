import {
  YES_OR_NO,
  SEX_TYPE_MAP,
  BUSINESS_TYPE_MAP,
  ROLE_TYPE_MAP,
  PIC_TAG_TYPE_MAP,
  TASK_TAG_TYPE_MAP,
  TASK_STATUS_MAP,
  AUDIT_STATUS_MAP,
  AUDIT_TYPE_MAP,
  TAG_STATUS_MAP,
  CONTROL_TYPE_MAP
} from '@/constants.js'

//有无表单
export const yesNoList = [
  { name: '有', value: YES_OR_NO.YES },
  { name: '无', value: YES_OR_NO.NO }
]

//通用状态
export const commonStatusList = [
  { name: '启用', value: YES_OR_NO.NO },
  { name: '停用', value: YES_OR_NO.YES }
]

//删除状态状态
export const deleteStatusList = [
  { name: '未删除', value: YES_OR_NO.NO },
  { name: '已删除', value: YES_OR_NO.YES }
]

//性别
export const sexTypeList = [
  { name: '保密', value: SEX_TYPE_MAP.UNKNOWN },
  { name: '男', value: SEX_TYPE_MAP.MALE },
  { name: '女', value: SEX_TYPE_MAP.FEMALE }
]

//用户的商务类型
export const businessTypeList = [
  { name: '众包用户', value: BUSINESS_TYPE_MAP.CROWD },
  { name: '本公司用户', value: BUSINESS_TYPE_MAP.COMPANY },
  { name: '外包公司', value: BUSINESS_TYPE_MAP.EPIBOLY }
]

//用户角色
export const roleTypeList = [
  { name: '超级管理员', value: ROLE_TYPE_MAP.SUPERADMIN },
  { name: '企业管理员', value: ROLE_TYPE_MAP.COMMONADMIN },
  { name: '初级审核', value: ROLE_TYPE_MAP.PRIMARYAUDIT },
  { name: '高级审核', value: ROLE_TYPE_MAP.SENIORAUDIT },
  { name: '最终审核', value: ROLE_TYPE_MAP.FINALAUDIT },
  { name: '标注人员', value: ROLE_TYPE_MAP.DATATAG },
  { name: '小组长', value: ROLE_TYPE_MAP.CHARGER }
]
//任务类型
export const tasktypeList = [
  { name: '试标任务', value: YES_OR_NO.YES },
  { name: '正式任务', value: YES_OR_NO.NO }
]

//图片标注类别
export const picTagTypeList = [
  { name: '点', value: PIC_TAG_TYPE_MAP.POINT },
  { name: '线', value: PIC_TAG_TYPE_MAP.LINE },
  { name: '矩形', value: PIC_TAG_TYPE_MAP.EXTENT },
  { name: '多边形', value: PIC_TAG_TYPE_MAP.POLYGON },
  { name: '正方形', value: PIC_TAG_TYPE_MAP.SQUARE }
]

//任务标注类型
export const taskTagTypeList = [
  { name: '图片标注', value: TASK_TAG_TYPE_MAP.PICMARK },
  { name: '简单视频标注', value: TASK_TAG_TYPE_MAP.VIDEOMARK },
  { name: '语音标注', value: TASK_TAG_TYPE_MAP.AUDIOMARK },
  { name: '文本/NLP标注', value: TASK_TAG_TYPE_MAP.TEXTMARK },
  { name: '视频跟踪标注', value: TASK_TAG_TYPE_MAP.TRACEMARK },
  { name: '图片筛选', value: TASK_TAG_TYPE_MAP.PICFILTER }
]

//任务状态
export const taskStatusList = [
  { name: '新建', value: TASK_STATUS_MAP.CREATE },
  { name: '任务已分发', value: TASK_STATUS_MAP.ASSIGNED },
  { name: '任务领取完成', value: TASK_STATUS_MAP.DOING },
  { name: '任务已完成', value: TASK_STATUS_MAP.FINISHED }
]

//数据审核状态
export const auditStatusList = [
  { name: '不合格', value: AUDIT_STATUS_MAP.AUDITFAIL },
  { name: '合格', value: AUDIT_STATUS_MAP.AUDITPASS },
  { name: '未审核', value: AUDIT_STATUS_MAP.UNAUDITED }
]

//数据审核类型
export const auditTypeList = [
  { name: '初级审核', value: AUDIT_TYPE_MAP.PRIMARYAUDIT },
  { name: '高级审核', value: AUDIT_TYPE_MAP.SENIORAUDIT },
  { name: '最终审核', value: AUDIT_TYPE_MAP.FINALAUDIT }
]

//数据标注状态
export const tagStatusList = [
  { name: '未审核', value: TAG_STATUS_MAP.TAG },
  { name: '合格', value: TAG_STATUS_MAP.AUDITPASS },
  { name: '不合格', value: TAG_STATUS_MAP.AUDITFAIL }
]

//数据有效性
export const effectiveStatusList = [
  { name: '无效', value: YES_OR_NO.YES },
  { name: '有效', value: YES_OR_NO.NO }
]

//控件类型
export const controlTypeList = [
  { name: '文本框', value: CONTROL_TYPE_MAP.TEXTBOXCONTROL },
  { name: '下拉列表', value: CONTROL_TYPE_MAP.SELECTCONTROL },
  { name: '单选按钮', value: CONTROL_TYPE_MAP.RADIOCONTROL },
  { name: '复选按钮', value: CONTROL_TYPE_MAP.CHECKBOXCONTROL },
  { name: '文本域', value: CONTROL_TYPE_MAP.TEXTAREACONTROL },
  { name: '关联控件', value: CONTROL_TYPE_MAP.LINKCONTROL },
  { name: '标签控件', value: CONTROL_TYPE_MAP.LABELCONTROL }
]
