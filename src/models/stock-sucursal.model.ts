import sequelize, { DataTypes } from 'main/database/connect';

 const StockSucursal = sequelize.define('stockSucursal', {
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

export default StockSucursal