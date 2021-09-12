const getters = {
  resourceCodes: state => state.permission.resourceCodes,
  sidebar: state => state.app.sidebar,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  userInfo: state => state.user.userInfo
}
export default getters
