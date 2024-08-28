import sequelize, { DataTypes } from '../database';

export const ProductsCombos = sequelize.define('products_combos', {
    ComboId: {
        type: DataTypes.STRING,
        references: {
            model: "combos",
            key: 'id'
        }
    },
    ProductId: {
        type: DataTypes.STRING,
        references: {
            model: "products",
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
    }
});