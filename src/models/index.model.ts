import User from "./user.model";
import ClientSupplier from "./agent.model";
import Product from "./product.model";
import Sucursal from "./sucursal.model";
import Ticket from "./ticket.model";
import Stock from "./stock.model";
import PriceList from "./list.model";
import ProductPrice from "./product-price.model";
import StockSucursal from "./stock-sucursal.model";
import TicketProduct from "./ticket-product.model";

// User

User.hasMany(Ticket);

// CLIENTS - SUPPLIERS

ClientSupplier.hasMany(Ticket);

// SUCURSAL

Sucursal.hasMany(Ticket);
Sucursal.hasMany(StockSucursal);

// Product
Product.belongsTo(ProductPrice);
Product.belongsTo(TicketProduct);

// Product-PRICES

Product.belongsToMany(PriceList, { through: ProductPrice });
PriceList.belongsToMany(Product, { through: ProductPrice });
ProductPrice.belongsTo(Product);
ProductPrice.belongsTo(PriceList);

// STOCK-SUCURSAL

Stock.belongsToMany(Sucursal, { through: StockSucursal });
Sucursal.belongsToMany(Stock, { through: StockSucursal });
StockSucursal.belongsTo(Stock);
StockSucursal.belongsTo(Sucursal);

// TICKET

Ticket.belongsTo(Sucursal);

// TICKET-Product

Ticket.belongsToMany(Product, { through: TicketProduct });
Product.belongsToMany(Ticket, { through: TicketProduct });
TicketProduct.belongsTo(Ticket);
TicketProduct.belongsTo(Product);

export {
  User,
  ClientSupplier,
  Product,
  ProductPrice,
  PriceList,
  Ticket,
  TicketProduct,
  Sucursal,
  Stock,
  StockSucursal,
};
