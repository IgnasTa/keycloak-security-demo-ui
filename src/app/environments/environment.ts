export const environment = {
    production: false,
    keycloak: {
        config: {
        url: 'http://localhost:8081',
        realm: 'ems-realm',
        clientId: 'ems-client'
        },
        initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
        }
    }
};