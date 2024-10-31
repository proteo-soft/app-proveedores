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
});
Sucursal.belongsToMany(Product, {
  through: Stock,
});

// SUPER MANY-TO-MANY RELATION
Product.hasMany(Stock);
Stock.belongsTo(Product);
Sucursal.hasMany(Stock);
Stock.belongsTo(Sucursal);

// LIST

List.hasMany(Ticket);

// PRICE

Product.belongsToMany(List, {
  through: Price,
});
List.belongsToMany(Product, {
  through: Price,
});

Product.hasMany(Price);
Price.belongsTo(Product);
List.hasMany(Price);
Price.belongsTo(List);

// TICKET-PRODUCT

Product.belongsToMany(Ticket, {
  through: TicketProduct,
});
Ticket.belongsToMany(Product, {
  through: TicketProduct,
});

// PRODUCT

Product.belongsTo(Size);
Product.belongsTo(Color);

// TICKET

Ticket.belongsTo(Sucursal);
Ticket.belongsTo(Agent);
Ticket.belongsTo(List);
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
