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

    try {

        const payload = req.body

        if (payload.type !== 'PAYMENT_STATUS_CHANGED') {
            throw new Error("error")
        }

        const transactionId = payload.data.transaction.id
        const status1 = payload.data.transaction.status
        const productId = payload.data.product.id
        const productName = payload.data.product.name
        const customerName = payload.data.customer.name
        const customerEmail = payload.data.customer.email


        return res.json({
            transactionId: transactionId,
            productId: productId,
            status: status1,
            productName: productName,
            customerName: customerName,
            customerEmail: customerEmail

        })

        // Respond with a success status

    } catch (err) {
        // Respond with a 405 error for non-POST requests
        res.status(405).json({
            message: err.message
        })
    }
};
