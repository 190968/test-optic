import qs from 'qs';

export default {
    async login({commit, getters}, payload) {
        let user = await this.$axios.post(
            getters.getEndpointLogin,
            qs.stringify({
                'USER_LOGIN':payload.username,
                'USER_PASSWORD':payload.password,
                'AUTH_FORM':'Y',
                'TYPE':'AUTH'
            })
        );
        return user;
    }
}