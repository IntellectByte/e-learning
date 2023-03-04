const {DOMParser} = require('xmldom');
import axios from "axios";
// import { checkoutConfirmation } from "email-templates/checkout-confirmation";


export default async function handler(req, res) {
    switch (req.method) {
        case "DELETE":
            await handleGetRequest(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
}

const handleGetRequest = async (req, res) => {


    const {REDE_API_URL, REDE_MERCHANT_ID, REDE_MERCHANT_KEY} = process.env

    const {pay_order} = req.query

    const headers = {
        'Content-Type': 'text/xml'
    };

    const url = `${REDE_API_URL}/UniversalAPI/postAPI`

    const xmlString = `
<api-request>
    <verification>
		<merchantId>${REDE_MERCHANT_ID}</merchantId>
		<merchantKey>${REDE_MERCHANT_KEY}</merchantKey>
    </verification>
    <command>cancel-payment-order</command>
    <request>
        <payOrderId>${pay_order}</payOrderId>
    </request>
</api-request>`;


    try {

        const parser = new DOMParser();

        const xmlRes = (await axios.post(url, xmlString, {headers})).data

        const xmlDoc = parser.parseFromString(xmlRes, 'text/xml')

        const redeMessage = xmlDoc.getElementsByTagName('message')[0].textContent;

        res.status(200).json({

            message: redeMessage

        });
    } catch (e) {
        res.status(400).json({
            error_code: "cancel_order", message: e.message,
        });
    }
};
