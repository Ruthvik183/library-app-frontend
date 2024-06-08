export const oktaConfig = {
    clientId: '0oahlr8up38sgns045d7',
    issuer: 'https://dev-70783447.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openId', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}