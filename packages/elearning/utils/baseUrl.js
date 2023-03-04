const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'http://localhost:3000'
        : 'http://localhost:3000';
//        ? 'https://develop.escolasorvete.com.br'
//        : 'https://develop.escolasorvete.com.br';

export default baseUrl;
