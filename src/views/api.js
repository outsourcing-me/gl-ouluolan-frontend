export default [
  {
    name: 'login', // 登录
    url: '/api-open/login',
    methods: ['post'],
  },
  {
    name: 'checkValidateCode', // 校验验证码
    url: '/uaa/checkImageCode',
    methods: ['get'],
  },
  {
    name: 'getUserList', //获取用户列表，查询条件在headers中
    url: '/api-usr/user/list',
    methods: ['get'],
  },
  {
    name: 'fobiddenUser', //禁用用户
    url: '/api-usr/user/disable',
    methods: ['post'],
  },
  {
    name: 'enableUser', //启用用户
    url: '/api-usr/user/enable',
    methods: ['post'],
  },
  {
    name: 'deleteUser', //删除用户
    url: '/api-usr/user/deletes',
    methods: ['post'],
  },
  {
    name: 'resetUserPassword', //管理员重置用户密码
    url: '/api-usr/user/mgrreset/pwd',
    methods: ['post'],
  },
  {
    name: 'changePassword', //修改自身登录密码
    url: '/api-usr/user/reset/pwd',
    methods: ['post'],
  },
  {
    name: 'validAccoutname', //验证用户名是否存在
    url: '/api-usr/user/repeat/acct', // /api-usr/user/repeat/acct?acctName=zhangsan
    methods: ['get'],
  },
  {
    name: 'addUser', //新增用户
    url: '/api-usr/user/add',
    methods: ['post'],
  },
  {
    name: 'updateUser', //修改用户
    url: '/api-usr/user/modify',
    methods: ['post'],
  },
  {
    name: 'queryUser', //根据id获取用户详情
    url: '/api-usr/user/detail/:userId',
    methods: ['get'],
  },
  {
    name: 'setUserOrgRoles', //设置用户在某组织机构中的权限
    url: '/api-usr/permit/role/relate/',
    methods: ['post'],
  },
  {
    name: 'deleteUserOrgRoles', //删除用户在某组织机构中的权限
    url: '/api-usr/permit/userorg/remove',
    methods: ['post'],
  },
  {
    name: 'queryUserOrgRoles', //获取用户在某组织机构中的权限
    url: '/api-usr/permit/userorg/roles/:userId/:orgId',
    methods: ['get'],
  },
  {
    name: 'getUserOrg', //获取用户所在的组织机构
    url: '/api-usr/user/orgs',
    methods: ['get'],
  },
  {
    name: 'getOrgList', //获取组织机构列表，查询条件在headers中
    url: '/api-usr/org/list',
    methods: ['get'],
  },
  {
    name: 'fobiddenOrg', //禁用组织机构
    url: '/api-usr/org/disable',
    methods: ['post'],
  },
  {
    name: 'enableOrg', //启用组织机构
    url: '/api-usr/org/enable',
    methods: ['post'],
  },
  {
    name: 'deleteOrg', //删除组织机构
    url: '/api-usr/org/deletes',
    methods: ['post'],
  },
  {
    name: 'validOrgCode', //验证组织机构代码是否存在
    url: '/api-usr/org/repeat/code', // /api-usr/org/repeat/code?code=122
    methods: ['get'],
  },
  {
    name: 'validOrgName', //验证组织机构名是否存在
    url: '/api-usr/org/repeat/name', // /api-usr/org/repeat/name?name=bitmain
    methods: ['get'],
  },
  {
    name: 'addOrg', //新增组织机构
    url: '/api-usr/org/add',
    methods: ['post'],
  },
  {
    name: 'updateOrg', //修改组织机构
    url: '/api-usr/org/modify',
    methods: ['post'],
  },
  {
    name: 'queryOrg',
    url: '/api-usr/org/detail/:orgId',
    methods: ['get'],
  },
  {
    name: 'getRoleList', //获取角色列表
    url: '/api-usr/permit/roles',
    methods: ['get'],
  },
  {
    name: 'getContractList', //获取项目列表，查询参数在headers中
    url: '/api-config/contract/list/',
    methods: ['get'],
  },
  {
    name: 'deleteContract', //删除项目
    url: '/api-config/contract/delete/',
    methods: ['post'],
  },
  {
    name: 'queryContract', //查看项目详情
    url: '/api-config/contract/detail/:contractId',
    methods: ['get'],
  },
  {
    name: 'addContract', //新增项目
    url: '/api-config/contract/add/',
    methods: ['post'],
  },
  {
    name: 'updateContract', //修改项目
    url: '/api-config/contract/update/',
    methods: ['post'],
  },
  {
    name: 'getTagStatiscs', //获取任务标注数据统计
    url: '/api-tag/report/tag/date/:taskId', // /api-tag/report/tag/date/1?begin=20180101&end=20180110
    methods: ['get'],
  },
  {
    name: 'getAuditStatiscs', //获取任务审核数据统计
    url: '/api-tag/report/audit/date/:taskId', // /api-tag/report/tag/date/1?begin=20180101&end=20180110
    methods: ['get'],
  },
  {
    name: 'getFileGroupList', //获取文件组列表，查询参数在headers中
    url: '/api-file/file-group/list/',
    methods: ['get'],
  },
  {
    name: 'addFileGroup', //新增文件组
    url: '/api-file/file-public/execute',
    methods: ['post'],
  },
  {
    name: 'getTaskList', //获取任务列表，查询参数在headers中
    url: '/api-config/task/list/',
    methods: ['get'],
  },
  {
    name: 'queryTask', //获取任务详情
    url: '/api-config/task/detail/:taskId',
    methods: ['get'],
  },
  {
    name: 'deleteTask', //删除任务
    url: '/api-config/task/delete/',
    methods: ['post'],
  },
  {
    name: 'beginTask', //开启任务
    url: '/api-config/task/assign/:taskId',
    methods: ['get'],
  },
  {
    name: 'finishTask', //结束任务
    url: '/api-config/task/finish/:taskId',
    methods: ['get'],
  },
  {
    name: 'copyTask', //复制任务
    url: '/api-config/task/copy/:taskId',
    methods: ['get'],
  },
  {
    name: 'dataBacToDB', //数据回库
    url: '/api-tag/operate/tagback/:taskId',
    methods: ['get'],
  },
  {
    name: 'addTask', //新增任务
    url: '/api-config/task/add/',
    methods: ['post'],
  },
  {
    name: 'updateTask', //修改任务
    url: '/api-config/task/update/',
    methods: ['post'],
  },
  {
    name: 'getTaskPropertyList', //获取任务关联属性列表
    url: '/api-config/task-property/list/:taskId',
    methods: ['get'],
  },
  {
    name: 'addTaskProperty', //新增任务关联属性
    url: '/api-config/task-property/add/',
    methods: ['post'],
  },
  {
    name: 'deleteTaskProperty', //删除任务关联属性
    url: '/api-config/task-property/delete/',
    methods: ['post'],
  },
  {
    name: 'getPropertyList', //获取属性列表，查询参数在headers中
    url: '/api-config/property/list-page/',
    methods: ['get'],
  },
  {
    name: 'deleteProperty', //删除属性
    url: '/api-config/property/delete/',
    methods: ['post'],
  },
  {
    name: 'addProperty', //新增属性
    url: '/api-config/property/add/',
    methods: ['post'],
  },
  {
    name: 'updateProperty', //修改属性
    url: '/api-config/property/update/',
    methods: ['post'],
  },
  {
    name: 'queryProperty', //查询属性详情
    url: '/api-config/property/detail/:propertyId',
    methods: ['get'],
  },
  // {
  //   name: 'getPropertyItems', //获取属性数据项
  //   url: '/api-config/property/detail/:propertyId',
  //   methods: ['get']
  // },
  {
    name: 'deletePropertyItem', //删除属性数据项
    url: '/api-config/property_values/delete/',
    methods: ['post'],
  },
  {
    name: 'queryPropertyItem', //查询属性数据项详情
    url: '/api-config/property_values/detail/:propertyItemId',
    methods: ['get'],
  },
  {
    name: 'addPropertyItem', //新增属性数据项
    url: '/api-config/property_values/add/',
    methods: ['post'],
  },
  {
    name: 'updatePropertyItem', //修改属性数据项
    url: '/api-config/property_values/update/',
    methods: ['post'],
  },
  {
    name: 'getTaskPropertyByTaskId', //根据任务id获取对应的表单
    url: '/api-config/property/tag/:taskId',
    methods: ['get'],
  },
  {
    name: 'addTagData', //新增标注数据
    url: '/api-tag/tag/add',
    methods: ['post'],
  },
  {
    name: 'updateTagData', //修改标注数据
    url: '/api-tag/tag/modify',
    methods: ['post'],
  },
  {
    name: 'getNewTagData', //根据任务id获取一条新的标注数据
    url: '/api-tag/tag/pre/:taskId', // /api-tag/tag/pre/:taskId?skipTagId=22,加上skipTagId为跳过当前的数据获取新的数据
    methods: ['get'],
  },
  {
    name: 'getTagData', //标注人员获取已审核的标注数据
    url: '/api-tag/tag/audut/:tagId',
    methods: ['get'],
  },
  {
    name: 'getNextAuditData', //审核人员获取一条未审核数据，参数存在headers中
    url: '/api-tag/audut/next',
    methods: ['get'],
  },
  {
    name: 'getAuditData', //审核人员获取已审核的数据
    url: '/api-tag/audit/data/:auditId',
    methods: ['get'],
  },
  {
    name: 'modifyPassByCharger', //小组长修改通过
    url: '/api-tag/tag/mgr/modify',
    methods: ['post'],
  },
  {
    name: 'auditData', //提交审核数据
    url: '/api-tag/sample/audit',
    methods: ['post'],
  },
  {
    name: 'getSampleList', //获取样本列表
    url: '/api-tag/sample/list',
    methods: ['get'],
  },
  {
    name: 'addNewSample', //抽取新样本
    url: '/api-tag/sample/execute',
    methods: ['post'],
  },
  {
    name: 'finishSample', //结束样本
    url: '/api-tag/sample/finish/:sampleId',
    methods: ['get'],
  },
  {
    name: 'getTaskSample', //获取任务所有样本
    url: '/api-tag/sample/current/:taskId',
    methods: ['get'],
  },
  {
    name: 'getAuditDataFromSample', //根据样本类型和样本id获取审核数据
    url: '/api-tag/sample/next/:sampleType/:sampleId',
    methods: ['get'],
  },
  {
    name: 'redoTag', //返工：全部重做标注
    url: '/api-tag/tag/rework',
    methods: ['post'],
  },
  {
    name: 'getTaggerListByCharger', //小组长获取标注人员列表
    url: '/api-tag/sample/statistics/cur/',
    methods: ['post'],
  },
  {
    name: 'getAuditProcessList', //获取审核人员审核进度列表
    url: '/api-tag/sample/statistics/auditor',
    methods: ['get'],
  },
  {
    name: 'getTagProcessList', //获取标注人员标注进度列表
    url: '/api-tag/tag/count/list',
    methods: ['get'],
  },
  {
    name: 'modifyPassByAuditor', //审核修改通过
    url: '/api-tag/sample/modifyPass',
    methods: ['post'],
  },
  {
    name: 'getTagStaticsCount', //获取标注统计结果
    url: '/api-tag/tag/count/statistics/:taskId',
    methods: ['get'],
  },
  {
    name: 'importData', //任务数据导入
    url: '/api-tag/import/pretag/async/:taskId',
    methods: ['post'],
  },
  {
    name: 'exportData', //任务标注结果导出
    url: '/api-tag/export/result/:taskId',
    methods: ['get'],
  },
  {
    name: 'exportHistory', //导入导出历史查询
    url: '/api-tag/import/logs', // /api-tag/import/logs?taskId=1
    methods: ['get'],
  },
  {
    name: 'tagStatiscsReport', //标注人员维度统计
    url: '/api-report/report/marker/:contractId/:taskId', // /api-report/report/marker/1/1?with_audit=1,表示同时请求标注数据和审核数据
    methods: ['get'],
  },
  {
    name: 'auditStatiscsReport', //审核人员维度统计
    url: '/api-report/report/audit/marker/:contractId', // /api-report/report/audit/marker/1?taskId=11
    methods: ['get'],
  },
]
