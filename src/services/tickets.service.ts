import Tickets from "@repositories/tickets.rep";
import { validateTicket, TicketShape } from "@utils/schemas";

import CustomError from "@utils/errors/customError";

class TicketService {
  static async create(data: TicketShape) {
    try {
      const result = validateTicket(data);

      if (!result.success)
        CustomError.new({
          message: "La petición contiene campos inválidos",
          data: result.error,
          statusCode: 400,
        });

      await Tickets.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(query) {
    try {
      return await Tickets.getAll(query);
    } catch (error) {
      throw error;
    }
  }
}

export default TicketService;
