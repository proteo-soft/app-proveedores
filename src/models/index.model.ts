import { Auth } from "./auth.model";
import { Users } from "./users.model";
import { ClientsSuppliers } from "./clients-suppliers.model";
import { Categories } from "./categories.model";
import { Subcategories } from "./subcategories.model";
import { Products } from "./products.model";
import { Combos } from "./combos.model";
import { Sucursal } from "./sucursal.model";
import { Tickets } from "./tickets.model";
import { Stock } from "./stock.model";
import { PricesLists } from "./prices-lists.model";
import { ProductsCombos } from "./products-combos.model";
import { ProductsPrices } from "./products-prices.model";
import { StockSucursal } from "./stock-sucursal.model";
import { TicketsProducts } from "./tickets-products.model";

// USERS

Users.hasMany(Tickets);
Users.hasOne(Auth);

// CLIENTS - SUPPLIERS

ClientsSuppliers.hasMany(Tickets);

// CATEGORIES

Categories.hasMany(Products);
Categories.hasMany(Subcategories);

// SUBCATEGORIES

Subcategories.hasMany(Products);
Subcategories.belongsTo(Categories);

// SUCURSAL

Sucursal.hasMany(Tickets);
Sucursal.hasMany(StockSucursal);

// PRODUCTS-COMBOS

Combos.belongsToMany(Products, { through: ProductsCombos });
Products.belongsToMany(Combos, { through: ProductsCombos });
ProductsCombos.belongsTo(Products);
ProductsCombos.belongsTo(Combos);

// PRODUCTS

Products.hasOne(Combos);
Products.hasMany(ProductsCombos);
Products.belongsTo(Categories);
Products.belongsTo(Subcategories);
Products.belongsTo(ProductsPrices);
Products.belongsTo(TicketsProducts);

// COMBOS

Combos.hasMany(ProductsCombos);
Combos.belongsTo(Products);

// PRODUCTS-PRICES

Products.belongsToMany(PricesLists, { through: ProductsPrices });
PricesLists.belongsToMany(Products, { through: ProductsPrices });
ProductsPrices.belongsTo(Products);
ProductsPrices.belongsTo(PricesLists);

// STOCK-SUCURSAL

Stock.belongsToMany(Sucursal, { through: StockSucursal });
Sucursal.belongsToMany(Stock, { through: StockSucursal });
StockSucursal.belongsTo(Stock);
StockSucursal.belongsTo(Sucursal);

// TICKETS

Tickets.belongsTo(Sucursal);

// TICKETS-PRODUCTS

Tickets.belongsToMany(Products, { through: TicketsProducts });
Products.belongsToMany(Tickets, { through: TicketsProducts });
TicketsProducts.belongsTo(Tickets);
TicketsProducts.belongsTo(Products);

export {
  Auth,
  Users,
  ClientsSuppliers,
  Categories,
  Subcategories,
  Products,
  ProductsPrices,
  PricesLists,
  Tickets,
  TicketsProducts,
  Sucursal,
  Stock,
  StockSucursal
};
