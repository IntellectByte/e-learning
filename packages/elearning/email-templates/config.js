import nodemailer from "nodemailer";
import mandrillTransport from 'nodemailer-mandrill-transport'

export const transport = nodemailer.createTransport({
	// Yes. SMTP!
	service: "SMTP",
	host: "smtp.mandrillapp.com", // Amazon email SMTP hostname
	secureConnection: true, // use SSL
	port: 587, // port for secure SMTP
	auth: {
		user: 'Escola Sorvete', // Use from Amazon Credentials
		pass: 'md-RG23QCjSJIi5Z_sN-01v_g', // Use from Amazon Credentials
	},
});

// export const transport = nodemailer.createTransport(mandrillTransport({
// 	auth: {
// 		apiKey: 'md-RG23QCjSJIi5Z_sN-01v_g'
// 	}
// }));