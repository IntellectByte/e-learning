const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://escolasorvete-2ae03.web.app"
		: "http://localhost:5000";

export default baseUrl;
