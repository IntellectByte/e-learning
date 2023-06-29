import Notification from "../../../database/models/notification";

export default async function handler(req, res) {
   /*  if (!("authorization" in req.headers)) {
        return res.status(401).json({ message: "No autorization token" });
    } */
    switch (req.method) {
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
}

const handlePostRequest = async (req, res) => {
    const { title, message, read, link, notificationType, userId } = req.body;

    try {
        const notificationExist = await Notification.findOne({
            where: { code: notification },
        });

        if (notificationExist) {
            return res.status(422).json({
                message: "Notification with the same code already exists",
            });
        }

        if (!title || !message || !userId) {
            return res.status(422).json({
                message: "Title, message, and userId must be provided",
            });
        }

        const newNotification = await Notification.create({
            title,
            message,
            read,
            link,
            notificationType,
            userId,
        });

        res.status(200).json({
            message: "New notification code added",
            notification: newNotification,
        });
    } catch (e) {
        res.status(400).json({
            error_code: "create_notification",
            message: e.message,
        });
    }
};

const handlePutRequest = async (req, res) => {
    const { notificationId } = req.body;

    try {
        const notifications = await Notification.findAll({ attributes: ["id"] });
        let notificationIds = [];
        notifications.forEach((cp) => {
            notificationIds.push(cp.id);
        });

        await Notification.update(
            { active_for_full_site: false },
            {
                where: {
                    id: notificationIds,
                },
            }
        );

        res.status(200).json({
            message: "Notification code activated for all courses",
        });
    } catch (e) {
        res.status(400).json({
            error_code: "notification_for_all_courses",
            message: e.message,
        });
    }
};
