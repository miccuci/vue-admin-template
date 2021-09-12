import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  const addRouters = store.getters.addRouters
  if (addRouters.length) {
    next()
  } else {
    store.dispatch('getUserInfo')
    store.dispatch('GenerateRoutes').then(() => {
      if (store.getters.addRouters.length) {
        router.addRoutes(store.getters.addRouters)
        next({ ...to, replace: true })
      } else {
        next()
      }
    })
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
