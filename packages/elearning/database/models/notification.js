import {Model, DataTypes} from "sequelize";
import connection from "../connection";

const initNotification = (sequelize, Types) => {
    class Notification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Notification.init(
        {
            id: {
                type: Types.UUID,
                defaultValue: Types.UUIDV4,
                primaryKey: true,
            },
            title: Types.STRING,
            message: Types.STRING,
            read: Types.BOOLEAN,
            link: Types.STRING,
            notificationType: {
                type: DataTypes.ENUM,
                values: ["LiveStream"]
            },
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                    as: "userId",
                },
            },
        },
        {
            sequelize,
            modelName: "Notification",
            tableName: "notifications",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );


    return Notification;
};

export default initNotification(connection, DataTypes);
