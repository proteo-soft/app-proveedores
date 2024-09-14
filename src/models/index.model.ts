import User from "./user.model";
// import ClientSupplier from "./agent.model";
import Product from "./product.model";
import Sucursal from "./sucursal.model";
// import Ticket from "./ticket.model";
// import PriceList from "./list.model";
// import ProductPrice from "./product-price.model";
import Stock from "./stock.model";
// import TicketProduct from "./ticket-product.model";

// STOCK - SUCURSAL

Product.belongsToMany(Sucursal, { through: Stock });
Sucursal.belongsToMany(Product, { through: Stock });

export {
  User,
  // ClientSupplier,
  Product,
  // ProductPrice,
  // PriceList,
  // Ticket,
  // TicketProduct,
  Sucursal,
  Stock,
};
