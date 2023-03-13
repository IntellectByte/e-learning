const baseUrl =
    process.env.NODE_ENV === 'production'
//        ? 'https://develop.escolasorvete.com.br'
        ? 'http://localhost:3000'
//        : 'https://develop.escolasorvete.com.br';
        : 'http://localhost:3000';

export default baseUrl;
