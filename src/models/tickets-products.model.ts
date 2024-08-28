import sequelize, { DataTypes } from '../database';

export const TicketsProducts = sequelize.define('tickets_products', {
    ticketId: {
        type: DataTypes.STRING,
        references: {
            model: "tickets",
            key: 'id'
        }
    },

    productId: {
        type: DataTypes.STRING,
        references: {
            model: "products",
            key: 'id'
        }
    },

    units: {
        type: DataTypes.INTEGER,
    }
});