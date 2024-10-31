import ticketDao from "src/DAO/ticket.dao";

import { filterBuilder } from "@utils/filter-builder.util";
import { checkErrorType } from "@utils/errors/check-error-type.util";
import { TicketShape } from "@utils/schemas";
import productDao from "src/DAO/product.dao";
import listDao from "src/DAO/list.dao";
import sucursalDao from "src/DAO/sucursal.dao";
import userDao from "src/DAO/user.dao";
import agentDao from "src/DAO/agent.dao";

class TicketsRepository {
  static async create(data: TicketShape) {
    try {
      await ticketDao.create(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getAll(opt) {
    try {
      const filters = filterBuilder(opt);

      return await ticketDao.findAll({
        ...filters,
        include: [
          { model: productDao.model, attributes: ["name"] }, // ver si puedo consultar la join table
          { model: listDao.model, attributes: ["name"] },
          { model: sucursalDao.model, attributes: ["name"] },
          { model: userDao.model, attributes: ["fullName"] },
          { model: agentDao.model, attributes: ["name"] },
        ],
      });
    } catch (error) {
      throw checkErrorType(error);
    }
  }
}

export default TicketsRepository;
