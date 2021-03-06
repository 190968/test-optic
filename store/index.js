export const actions = {
    async nuxtServerInit({ dispatch }, { $axios, req, res }) {
        $axios.setHeader('cookie', req.headers.cookie);
        return Promise.all([
            dispatch('user/state'),
            dispatch('catalog/state'),
            dispatch('order/state'),
            dispatch('basket/state').then(response => {
                res.setHeader('Set-Cookie', response.headers['set-cookie']);
            }),
        ]);
    }
}
