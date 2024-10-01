import User from "./user.model";
import Auth from "./auth.model";
import Agent from "./agent.model";
import Sucursal from "./sucursal.model";
import Product from "./product.model";
import List from "./list.model";
import Price from "./price.model";
import Stock from "./stock.model";
import Ticket from "./ticket.model";
import TicketProduct from "./ticket-product.model";

// USER

User.hasMany(Ticket);
User.hasMany(Auth);

// AUTH

Auth.belongsTo(User);

// AGENT

Agent.hasMany(Ticket);

// SUCURSAL

Sucursal.hasMany(Ticket);

// STOCK

Product.belongsToMany(Sucursal, {
  through: Stock,
  onDelete: "CASCADE",
});
Sucursal.belongsToMany(Product, {
  through: Stock,
  onDelete: "CASCADE",
});

// PRICES

Product.belongsToMany(List, {
  through: Price,
  onDelete: "CASCADE",
});
List.belongsToMany(Product, {
  through: Price,
  onDelete: "CASCADE",
});

Price.hasMany(Ticket);

// TICKET-PRODUCT

Product.belongsToMany(Ticket, {
  through: TicketProduct,
  onDelete: "CASCADE",
});
Ticket.belongsToMany(Product, {
  through: TicketProduct,
  onDelete: "CASCADE",
});

// TICKET

Ticket.belongsTo(Sucursal);
Ticket.belongsTo(Agent);
Ticket.belongsTo(Price);
Ticket.belongsTo(User);

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
