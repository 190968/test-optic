export default ({ app: { router } }) => {
  let ready = false

  router.onReady(() => {
    // Mark when the router has completed the initial navigation.
    ready = true
  })

  function create() {
    window['yaCounter56402599'] = new Ya.Metrika2({"id":"56402599","webvisor":true,"trackLinks":true})
    router.afterEach((to, from) => {
      if (!ready) {
        // Don't record a duplicate hit for the initial navigation.
        return
      }
      window['yaCounter56402599'].hit(to.fullPath, {
        referer: from.fullPath
        // TODO: pass title: <new page title>
        // This will need special handling because router.afterEach is called *before* DOM is updated.
      })
    })
  }

  if (window.Ya && window.Ya.Metrika2) {
    // Yandex.Metrika API is already available.
    create()
  } else {
    // Yandex.Metrika has not loaded yet, register a callback.
    (function (w, c) {
      (w[c] = w[c] || []).push(create)
    })(window, 'yandex_metrika_callbacks')
  }
}
