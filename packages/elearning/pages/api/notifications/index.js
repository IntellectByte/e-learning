import Notificacion from "../../../database/models/notification";

export default async function handler(req, res) {
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ message: "No authorization token" });
  }

  switch (req.method) {
    case "DELETE":
      await handleDelete(req, res);
      break;
    default:
      res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}

const handleDelete = async (req, res) => {
  if (req.method === "DELETE") {
    const { notificacionId } = req.query;

    if (!notificacionId) {
      return res
        .status(400)
        .json({ message: "Missing notificacionId parameter" });
    }

    try {
      const notificacion = await Notificacion.findOne({
        where: { id: notificacionId }, // Cambiar notificacionId por id
      });

      if (notificacion) {
        await notificacion.destroy();
        res.status(200).json({ message: "Notificacion deleted successfully." });
      } else {
        res.status(404).json({ message: "Notificacion not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};
