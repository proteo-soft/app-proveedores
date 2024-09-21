import Auth from "./auth.model";
import User from "./user.model";
import Agent from "./agent.model";
import Product from "./product.model";
import Sucursal from "./sucursal.model";
import Ticket from "./ticket.model";
import List from "./list.model";
import Price from "./price.model";
import Stock from "./stock.model";
import TicketProduct from "./ticket-product.model";

// STOCK - SUCURSAL

Product.belongsToMany(Sucursal, { through: Stock, onDelete: "CASCADE" });
Sucursal.belongsToMany(Product, { through: Stock, onDelete: "CASCADE" });

export {
  User,
  Agent,
  Product,
  List,
  Price,
  Ticket,
  TicketProduct,
  Sucursal,
  Stock,
};
