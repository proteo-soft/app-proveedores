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

User.hasMany(Ticket, { foreignKey: "userId" });
User.hasMany(Auth, { foreignKey: "userId" });

// AUTH

Auth.belongsTo(User, { foreignKey: "authId" });

// AGENT

Agent.hasMany(Ticket, { foreignKey: "agentId" });

// SUCURSAL

Sucursal.hasMany(Ticket, { foreignKey: "sucursalId" });

// STOCK

Product.belongsToMany(Sucursal, { through: Stock, onDelete: "CASCADE" });
Sucursal.belongsToMany(Product, { through: Stock, onDelete: "CASCADE" });

// PRICES

Product.belongsToMany(List, { through: Price, onDelete: "CASCADE" });
List.belongsToMany(Product, { through: Price, onDelete: "CASCADE" });

Price.hasMany(Ticket, { foreignKey: "listPriceId" });

// TICKET-PRODUCT

Product.belongsToMany(Ticket, { through: TicketProduct, onDelete: "CASCADE" });
Ticket.belongsToMany(Product, { through: TicketProduct, onDelete: "CASCADE" });

// TICKET

Ticket.belongsTo(Sucursal, { foreignKey: "ticketId" });
Ticket.belongsTo(Agent, { foreignKey: "ticketId" });
Ticket.belongsTo(Price, { foreignKey: "ticketId" });
Ticket.belongsTo(User, { foreignKey: "ticketId" });

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
