import * as CONTS from '@/constants.js'

//有无表单
export const yesNoList = [{ name: '有', value: CONTS.YES_OR_NO.YES }, { name: '无', value: CONTS.YES_OR_NO.NO }]

//通用状态
export const commonStatusList = [
  { name: '启用', value: CONTS.YES_OR_NO.NO },
  { name: '停用', value: CONTS.YES_OR_NO.YES },
]

//删除状态状态
export const deleteStatusList = [
  { name: '未删除', value: CONTS.YES_OR_NO.NO },
  { name: '已删除', value: CONTS.YES_OR_NO.YES },
]
