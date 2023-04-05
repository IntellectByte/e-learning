const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://staging.escolasorvete.com.br'
        : 'http://localhost:3000';

export default baseUrl;
