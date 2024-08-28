import sequelize, { DataTypes } from '../database';

export const StockSucursal = sequelize.define('stock_sucursal', {
    sucursalId: {
        type: DataTypes.STRING,
        references: {
            model: "sucursal",
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