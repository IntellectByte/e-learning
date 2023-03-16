import axios from "axios";
import jwt from "jsonwebtoken";
import User from "@/database/models/user";
import passwordGenerator from "password-generator";
import bcrypt from "bcrypt";
import {passwordResetConfirmation} from "../../../../email-templates/password-reset-confirmation";

export default async (req, res) => {
    if (!("authorization" in req.headers)) {
        return res.status(401).json({message: "No autorization token"});
    }
    switch (req.method) {
        case "PUT":
            await handlePutRequest(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
};

const handlePutRequest = async (req, res) => {


    try {

        const {userId} = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );

        const user = await User.findOne({
            where: {id: userId},
        });

        // console.log(user.id)

        const passwordRandom = passwordGenerator(12, false)

        // console.log(passwordRandom)

        const passwordHash = await bcrypt.hash(passwordRandom, 10);

        await User.update(
            {
                password: passwordHash
            },
            {
                where: {id: userId}
            }
        )

        await passwordResetConfirmation(passwordRandom, user.first_name, user.email)

        res.status(200).json({
            message: "Password Updated."
        });

    } catch (e) {
        res.status(400).json({
            error_code: "create_link", message: e.message,
        });
    }
};
