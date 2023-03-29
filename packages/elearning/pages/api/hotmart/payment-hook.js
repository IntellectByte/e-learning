

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await hookHandler(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
}

const hookHandler = async (req, res) => {
    if (req.method === 'POST') {
        const payload = req.body

        if (payload.type === 'PAYMENT_STATUS_CHANGED') {
            // Process the payment status change
            const transactionId = payload.data.transaction.id
            const status = payload.data.transaction.status
            const productId = payload.data.product.id
            const productName = payload.data.product.name
            const customerName = payload.data.customer.name
            const customerEmail = payload.data.customer.email

            // Do something with the payment data, such as update your database or send a notification
            console.log(`Payment status changed for transaction ${transactionId}. Status is now ${status}.`)
            console.log(productId)
            console.log(productName)
            console.log(customerName)
            console.log(customerEmail)
        }

        // Respond with a success status
        res.status(200).end()
    } else {
        // Respond with a 405 error for non-POST requests
        res.status(405).end()
    }
};
