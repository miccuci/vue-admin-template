import { asyncRouterMap, constantRouterMap } from '@/router'
// import { get, getUrl } from '@/service'
// import { getPermissionRouters } from '@/utils'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    resourceCodes: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_RESOURCE: (state, codes) => {
      state.resourceCodes = codes
    }

  },
  actions: {
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', asyncRouterMap)
        resolve()
        /* const url = getUrl('authCodeList')
        get(url).then(res => {
          if (res && res.length) {
            const codes = res.map(item => item.resourceCode)
            commit('SET_RESOURCE', codes)
            const permissionRouters = getPermissionRouters(codes, asyncRouterMap)
            commit('SET_ROUTERS', permissionRouters)
          }
          resolve()
        }) */
      })
    }
  }
}

export default permission
