const productionUrls = [
  'https://www.escolasorvete.com.br',
  'https://escolasorvete.com.br'
];


const baseUrl =
  process.env.NODE_ENV === 'production'
    ? productionUrls[Math.floor(Math.random() * productionUrls.length)]
    : process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://escolasorvete.com.br';

export default baseUrl;

