import {Enrolment} from "@/database/models";
import User from "@/database/models/user";
import Course from "@/database/models/course";

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

        const {
            data, id, creation_date, event
        } = req.body




        if (event !== 'PURCHASE_COMPLETE') {
            throw new Error("The purchase could not be completed.")
        }

        console.log(event)
        console.log("product", data.product)
        console.log( "purchase", data.purchase )
        console.log("sub", data.subscription)
        console.log( "buyer", data.buyer)
        console.log(id)
        console.log(creation_date)

        const user = User.findOne({
            where: {email: data.buyer.email}
        })

        const course = Course.findOne({
            where: {hotmartId: data.product.id}
        })


        await Enrolment.create({
            bought_price: data.purchase.price.value,
            payment_method: "Hotmart Checkout",
            buyer_name: data.buyer.name,
            buyer_email: data.buyer.email,
            buyer_avatar: buyer_avatar,
            userId: user.id,
            courseId: course.id,
            status: "paid",
        });



        return res.json({
            message: "holas"
        })

        // Respond with a success status

    } catch (err) {
        // Respond with a 405 error for non-POST requests
        res.status(405).json({
            message: err.message
        })
    }
};


