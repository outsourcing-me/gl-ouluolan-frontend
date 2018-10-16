export default [
  {
    name: 'login', // 登录
    url: '/uaa/oauth/token',
    methods: ['post', 'get']
  },
  {
    name: 'logouting', // 登出
    url: '/uaa/logouting',
    methods: ['get']
  },
  {
    name: 'checkValidateCode', // 校验验证码
    url: '/uaa/checkImageCode',
    methods: ['get']
  },
  {
    name: 'userInfo', // 用户信息
    url: '/uaa/userinfo',
    methods: ['get']
  },
  {
    name: 'getUserList', //获取用户列表，查询条件在headers中
    url: '/api-usr/user/list',
    methods: ['get']
  },
  {
    name: 'fobiddenUser', //禁用用户
    url: '/api-usr/user/disable',
    methods: ['post']
  },
  {
    name: 'enableUser', //启用用户
    url: '/api-usr/user/enable',
    methods: ['post']
  },
  {
    name: 'deleteUser', //删除用户
    url: '/api-usr/user/deletes',
    methods: ['post']
  },
  {
    name: 'changeUserpassword', //管理员修改用户密码
    url: '/api-usr/user/mgrreset/pwd',
    methods: ['post']
  },
  {
    name: 'validAccoutname', //验证用户名是否存在
    url: '/api-usr/user/repeat/acct', // /api-usr/user/repeat/acct?acctName=zhangsan
    methods: ['get']
  },
  {
    name: 'addUser', //新增用户
    url: '/api-usr/user/add',
    methods: ['post']
  },
  {
    name: 'updateUser', //修改用户
    url: '/api-usr/user/modify',
    methods: ['post']
  },
  {
    name: 'queryUser', //根据id获取用户详情
    url: '/api-usr/user/detail/:id',
    methods: ['get']
  },
  {
    name: 'setUserOrgRoles', //设置用户在某组织机构中的权限
    url: '/api-usr/permit/role/relate/',
    methods: ['post']
  },
  {
    name: 'deleteUserOrgRoles', //删除用户在某组织机构中的权限
    url: '/api-usr/permit/userorg/remove',
    methods: ['post']
  },
  {
    name: 'queryUserOrgRoles', //获取用户在某组织机构中的权限
    url: '/api-usr/permit/userorg/roles/:userId/:orgId',
    methods: ['get']
  },
  {
    name: 'getOrgList', //获取组织机构列表，查询条件在headers中
    url: '/api-usr/org/list',
    methods: ['get']
  },
  {
    name: 'fobiddenOrg', //禁用组织机构
    url: '/api-usr/org/disable',
    methods: ['post']
  },
  {
    name: 'enableOrg', //启用组织机构
    url: '/api-usr/org/enable',
    methods: ['post']
  },
  {
    name: 'deleteOrg', //删除组织机构
    url: '/api-usr/org/deletes',
    methods: ['post']
  },
  {
    name: 'validOrgCode', //验证组织机构代码是否存在
    url: '/api-usr/org/repeat/code', // /api-usr/org/repeat/code?code=122
    methods: ['get']
  },
  {
    name: 'validOrgName', //验证组织机构名是否存在
    url: '/api-usr/org/repeat/name', // /api-usr/org/repeat/name?name=bitmain
    methods: ['get']
  },
  {
    name: 'addOrg', //新增组织机构
    url: '/api-usr/org/add',
    methods: ['post']
  },
  {
    name: 'updateOrg', //修改组织机构
    url: '/api-usr/org/modify',
    methods: ['post']
  },
  {
    name: 'queryOrg',
    url: '/api-usr/org/detail/:id',
    methods: ['get']
  },
  {
    name: 'getRoleList', //获取角色列表
    url: '/api-usr/permit/roles',
    methods: ['get']
  },
  {
    name: 'getContractList', //获取项目列表，查询参数在headers中
    url: '/api-config/contract/list/',
    methods: ['get']
  },
  {
    name: 'deleteContract', //删除项目
    url: '/api-config/contract/delete/',
    methods: ['post']
  },
  {
    name: 'queryContract', //查看项目详情
    url: '/api-config/contract/detail/:id',
    methods: ['get']
  },
  {
    name: 'addContract', //新增项目
    url: '/api-config/contract/add/',
    methods: ['post']
  },
  {
    name: 'updateContract', //修改项目
    url: '/api-config/contract/update/',
    methods: ['post']
  },
  {
    name: 'getTagStatiscs', //获取任务标注数据统计
    url: '/api-tag/report/tag/date/:id', // /api-tag/report/tag/date/1?begin=20180101&end=20180110
    methods: ['get']
  },
  {
    name: 'getAuditStatiscs', //获取任务审核数据统计
    url: '/api-tag/report/audit/date/:id', // /api-tag/report/tag/date/1?begin=20180101&end=20180110
    methods: ['get']
  },
  {
    name: 'getFileGroupList', //获取文件组列表，查询参数在headers中
    url: '/api-file/file-group/list/',
    methods: ['get']
  },
  {
    name: 'addFileGroup', //新增文件组
    url: '/api-file/file-public/execute',
    methods: ['post']
  },
  {
    name: 'getTaskList', //获取任务列表，查询参数在headers中
    url: '/api-config/task/list/',
    methods: ['get']
  },
  {
    name: 'queryTask',
    url: '/api-config/task/detail/:id',
    methods: ['get']
  },
  {
    name: 'deleteTask', //删除任务
    url: '/api-config/task/delete/',
    methods: ['post']
  },
  {
    name: 'beginTask', //开启任务
    url: '/api-config/task/assign/:id',
    methods: ['get']
  },
  {
    name: 'finishTask', //结束任务
    url: '/api-config/task/finish/:id',
    methods: ['get']
  },
  {
    name: 'copyTask', //复制任务
    url: '/api-config/task/copy/:id',
    methods: ['get']
  },
  {
    name: 'dataBacToDB', //数据回库
    url: '/api-tag/operate/tagback/:id',
    methods: ['get']
  },
  {
    name: 'queryTask', //查询任务详情
    url: '/api-config/task/detail/:id',
    methods: ['get']
  },
  {
    name: 'addTask', //新增任务
    url: '/api-config/task/add/',
    methods: ['post']
  },
  {
    name: 'updateTask', //修改任务
    url: '/api-config/task/update/',
    methods: ['post']
  },
  {
    name: 'getTaskPropertyList', //获取任务关联属性列表
    url: '/api-config/task-property/list/:id',
    methods: ['get']
  },
  {
    name: 'addTaskProperty', //新增任务关联属性
    url: '/api-config/task-property/add/',
    methods: ['post']
  },
  {
    name: 'deleteTaskProperty', //删除任务关联属性
    url: '/api-config/task-property/delete/',
    methods: ['post']
  }
]
