import {v4 as uuidv4} from "uuid";
import {Enrolment, Instructor_Earning, Course} from "@/database/models";
import {calculateCartTotal} from "@/utils/calculateCartTotal";

const {DOMParser} = require('xmldom');
import axios from "axios";
// import { checkoutConfirmation } from "email-templates/checkout-confirmation";


export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await handlePostRequest(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
}

const handlePostRequest = async (req, res) => {

    const {REDE_API_URL, REDE_MERCHANT_ID, REDE_MERCHANT_KEY, REDE_REFERENCE_NUM} = process.env

    const {cartItems, userId, buyer_name, buyer_email, buyer_avatar} = req.body;

    const {cartTotal} = calculateCartTotal(cartItems);

    const headers = {
        'Content-Type': 'text/xml'
    };

    const url = `${REDE_API_URL}/UniversalAPI/postAPI`

//     const xmlString = `<api-request>
//     <verification>
//         <merchantId>${REDE_MERCHANT_ID}</merchantId>
//         <merchantKey>${REDE_MERCHANT_KEY}</merchantKey>
//     </verification>
//     <command>add-payment-order</command>
//     <request>
//         <referenceNum>${REDE_REFERENCE_NUM}</referenceNum>
//         <userId>Flavis</userId>
//         <consumerAuthentication>N</consumerAuthentication>
//         <fraudCheck>N</fraudCheck>
//         <billing>
//             <email>${buyer_email}</email>
//             <firstName>${buyer_name}</firstName>
//             <lastName>${buyer_name}</lastName>
//         </billing>
//         <transactionDetail>
// 			<description>Pagamento Parcela da curso</description>
//             <comments>Pagar hoje</comments>
//             <emailSubject>Favor efetuar o pagamento</emailSubject>
//             <expirationDate>03/04/2025</expirationDate>
//             <acceptPix>N</acceptPix>
//             <payType>
//                 <creditCard>
//                     <processorID>1</processorID>
//                     <operation>auth</operation>
//                     <numberOfInstallments>1</numberOfInstallments>
//                     <currencyCode>BRL</currencyCode>
//                     <amount>${cartTotal}</amount>
//                 </creditCard>
//             </payType>
//         </transactionDetail>
//     </request>
// </api-request>`;

    const xmlString = `<api-request>
        <verification>
            <merchantId>22980</merchantId>
            <merchantKey>gcnv00nj9w7d5cihonkkhduc</merchantKey>
        </verification>
        <command>add-payment-order</command>
        <request>
            <referenceNum>20230304160644</referenceNum>
            <userId>Flavis</userId>
            <consumerAuthentication>N</consumerAuthentication>
            <fraudCheck>N</fraudCheck>
            <billing>
                <email>teste@maxipago.com</email>
                <firstName>Maxipago</firstName>
                <lastName>Teste</lastName>
            </billing>
            <transactionDetail>
                <description>Teste: Pagamento Parcela da moto 1 credit simulator 1</description>
                <comments>Pagar ate dia 30</comments>
                <emailSubject>Favor efetuar o pagamento</emailSubject>
                <expirationDate>03/04/2025</expirationDate>
                <acceptPix>N</acceptPix>
                <payType>
                    <creditCard>
                        <processorID>1</processorID>
                        <operation>auth</operation>
                        <numberOfInstallments>1</numberOfInstallments>
                        <currencyCode>BRL</currencyCode>
                        <amount>128.76</amount>
                    </creditCard>
                </payType>
            </transactionDetail>
        </request>
    </api-request>`;


    try {

        const parser = new DOMParser();

        const xmlRes = (await axios.post(url, xmlString, {headers})).data

        const xmlDoc = parser.parseFromString(xmlRes, 'text/xml')

        const redePaymentLink = xmlDoc.getElementsByTagName('url')[0].textContent;

        const redePayOrder = xmlDoc.getElementsByTagName('pay_order_id')[0].textContent;

        const redeMessage = xmlDoc.getElementsByTagName('message')[0].textContent;

        res.status(200).json({
            message: redeMessage,
            payOrder: redePayOrder,
            link: redePaymentLink
        });
    } catch (e) {
        res.status(400).json({
            error_code: "create_link", message: e.message,
        });
    }
};
