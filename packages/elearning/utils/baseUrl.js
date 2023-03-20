const { NODE_ENV } = process.env;
const baseUrl =
    NODE_ENV === 'production'
        ? 'http://localhost:3000'
        : 'http://localhost:3000';

export default baseUrl;
