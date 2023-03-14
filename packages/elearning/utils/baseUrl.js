const {NODE_ENV} = process.env


const baseUrl =
    NODE_ENV === 'production' ? 'https://develop.escolasorvete.com.br' : 'http://localhost:3000'

export default baseUrl;
