const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://escolasorvete-2ae03.web.app"
		: "http://localhost:3000";

export default baseUrl;
