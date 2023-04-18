const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://www.escolasorvete.com.br'
        : 'http://localhost:3000';

export default baseUrl;
