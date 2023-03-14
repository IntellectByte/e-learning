const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://escolasorvete.com.br'
        ? process.env.NODE_ENV === 'develop'
        : 'https://develop.escolasorvete.com.br'
        : 'http://localhost:3000'

export default baseUrl;
