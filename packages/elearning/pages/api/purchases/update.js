import {Course, Enrolment, Purchase, User} from "@/database/models";
import {checkoutConfirmation} from "../../../email-templates/checkout-confirmation";

export default async (req, res) => {

    // if (!("authorization" in req.headers)) {
    //     return res.status(401).json({message: "No autorization token"});
    // }

    switch (req.method) {
        case "GET":
            await purchase(req, res);
            break;

        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
};

const purchase = async (req, res) => {
    const purchaseId = req.query.orderId;
    const paymentStatus = "SUCCESS"

    try {


        const purchase = await Purchase.findOne({where: {id: purchaseId}});
        if (!purchase) {
            return res.status(404).json({
                error_code: "purchase_not_found",
                message: "Purchase not found.",
            });
        }

        // console.log(req.body)
        // return console.log(req.body.data.paymentStatus)

        const updatedPurchase = await Purchase.update({paymentState: paymentStatus},
            {
                where: {id: purchaseId}
            }
        );

        const user = await User.findOne({
            where: {id: purchase.userId}
        })

        if (!user){

            /// TODO: create user if does not exists

        }


        for (const cart of purchase.items) {

            if (cart.type === 'sub'){

                const courses = await Course.findAll()

                for (const course of courses){
                    await Enrolment.create({
                        bought_price: course.latest_price,
                        payment_method: "Getnet",
                        buyer_name: purchase.buyerName,
                        buyer_email: user.email,
                        buyer_avatar: user.profile_photo,
                        userId: user.id,
                        courseId: course.id,
                        status: "paid",
                    })
                }
                continue
            }

            const enrol = await Enrolment.findOne({
                where: {userId: purchase.userId, courseId: cart.id}
            })

            if (enrol) throw new Error("Enrolment already exists")

            await Enrolment.create({

                bought_price: cart.price,
                payment_method: "Getnet",
                buyer_name: purchase.buyerName,
                buyer_email: user.email,
                buyer_avatar: user.profile_photo,
                userId: user.id,
                courseId: cart.id,
                status: "paid",

            });
        }

        // console.log(purchase.items, purchase.buyerName, purchase.buyerEmail)

        await checkoutConfirmation(purchase.items, purchase.buyerName, purchase.buyerEmail);


        return res.redirect(301, "/payment-successful")


        res.status(201).json({
            message: "ok",
            purchase: purchase
        })



    } catch (e) {
        res.status(400).json({
            error_code: "purchase_update",
            message: e.message,
        });
    }
};
