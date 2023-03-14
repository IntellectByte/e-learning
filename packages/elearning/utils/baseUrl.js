const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://staging.escolasorvete.com.br'
        : 'https://e-learning-staging-sd4djmvt2q-uc.a.run.app';

export default baseUrl;
