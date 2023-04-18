const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://escolasorvete.com.br'
        : 'https://www.escolasorvete.com.br';

export default baseUrl;
