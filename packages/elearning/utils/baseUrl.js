const baseUrl =
	process.env.NODE_ENV === "production"
		? "http://develop.escolasorvete.com.br"
		: "http://develop.escolasorvete.com.br";

export default baseUrl;
