import Subscription from "database/models/subscription";


export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			await handleGet(req, res);
			break;

		default:
			res.status(405).json({
				message: `Method ${req.method} not allowed`,
			});
	}
}
async function handleGet(req, res) {
	try {
		const subs = await Subscription.findAll();

		res.status(200).json(subs);
	} catch (e) {
		res.status(400).json({
			error_code: "get_my_subs",
			message: e.message,
		});
	}
}
