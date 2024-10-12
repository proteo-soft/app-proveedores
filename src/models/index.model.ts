import User from "./user.model";
import Auth from "./auth.model";
import Agent from "./agent.model";
import Sucursal from "./sucursal.model";
import Product from "./product.model";
import Color from "./color.model";
import Size from "./size.model";
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

// SIZE

Size.hasMany(Product);

// COLOR

Color.hasMany(Product);

// STOCK

Product.belongsToMany(Sucursal, {
  through: Stock,
  onDelete: "CASCADE",
});
Sucursal.belongsToMany(Product, {
  through: Stock,
  onDelete: "CASCADE",
});

// SUPER MANY-TO-MANY RELATION
Product.hasMany(Stock);
Stock.belongsTo(Product);
Sucursal.hasMany(Stock);
Stock.belongsTo(Sucursal);

// PRICE

Product.belongsToMany(List, {
  through: Price,
  onDelete: "CASCADE",
});
List.belongsToMany(Product, {
  through: Price,
  onDelete: "CASCADE",
});

Price.belongsTo(List);
Price.belongsTo(Product);

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

// PRODUCT

Product.belongsTo(Size);
Product.belongsTo(Color);

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
