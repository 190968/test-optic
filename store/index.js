export const actions = {
    nuxtServerInit({ dispatch }, { $axios, req, res }) {
        $axios.setHeader('cookie', req.headers.cookie);
        return Promise.all([
            dispatch('user/STATE'),
            dispatch('catalog/STATE'),
            dispatch('basket/STATE', res),
            dispatch('order/STATE')
        ])
    }
}
