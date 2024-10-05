import Agents from "../repositories/agent.rep"

import { validateAgent } from "../utils/schemas/agent"

import CustomError from "../utils/errors/customError";

export default class SuppliersService {
    static async create(data) {
      try {
        const result = validateAgent(data);
        if (!result.success)
          CustomError.new({
            message: "La petición contiene campos inválidos",
            data: result.error,
            statusCode: 400,
          });
  
        return await Agents.create(result.data);
      } catch (error) {
        throw error;
      }
    }
  
    static async getAll(opt) {
      try {
        return await Agents.getAll(opt);
      } catch (error) {
        throw error;
      }
    }
  
    static async getById(id: string) {
      try {
        return await Agents.getById(parseInt(id));
      } catch (error) {
        throw error;
      }
    }

    static async getByEmail(email: string) {
      try {
        return await Agents.getByEmail(email);
  
        
      } catch (error) {
        throw error;
      }
    }
  
    static async update(id: string, data) {
      try {
        return await Agents.update(parseInt(id), data);
      } catch (error) {
        throw error;
      }
    }
  
    static async delete(id: string) {
      try {
        return await Agents.delete(parseInt(id));
      } catch (error) {
        throw error;
      }
    }
  }