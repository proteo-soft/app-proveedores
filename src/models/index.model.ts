import { Users } from "./users.model";
import { Products } from "./products.model";
import { PricesLists } from "./prices-lists.model";
import { ProductsPrices } from "./products-prices.model";

// PRODUCTS

Products.belongsTo(ProductsPrices);

// PRODUCTS-PRICES

Products.belongsToMany(PricesLists, { through: ProductsPrices });
PricesLists.belongsToMany(Products, { through: ProductsPrices });
// ProductsPrices.belongsTo(Products);
// ProductsPrices.belongsTo(PricesLists);

// Products.hasMany(ProductsPrices);
// PricesLists.hasMany(ProductsPrices);

export { Users, Products, ProductsPrices, PricesLists };
