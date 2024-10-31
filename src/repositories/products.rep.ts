import { Op } from "../database/connect";

import productsDAO from "@dao/product.dao";
import sucursalDAO from "@dao/sucursal.dao"; // usar el repo de suc
import stockDAO from "@dao/stock.dao";
import priceDao from "@dao/price.dao";

import SucursalRepository from "./sucursal.rep";
import ListsRepository from "./lists.rep";
import PricesRepository from "./prices.rep";
import StockRepository from "./stock.rep";

import { filterBuilder } from "@utils/filter-builder.util";
import { removeDuplicates } from "@utils/remove-duplicates.util";
import { checkMissingIds } from "@utils/check-missings";
import { checkErrorType } from "@utils/errors/check-error-type.util";
import CustomError from "@utils/errors/customError";

class ProductsRepository {
  static async checkMissings(idsToSearch: number[]) {
    try {
      const listsFound = await productsDAO.findAll({
        where: {
          id: {
            [Op.in]: idsToSearch,
          },
        },
      });

      checkMissingIds(listsFound.rows, idsToSearch);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async create(data) {
    try {
      const { stock: units, sucursalId, ...productData } = data;
      let sucursal;

      if (units && sucursalId)
        sucursal = await sucursalDAO.findById(sucursalId);

      const newProduct = await productsDAO.create(productData);
      // ver ventahjas/desventajas de que al crear un producto se cree autoamticamente el stock en todas las sucursales o ir creando de a poco.

      if (sucursal) {
        // ver ventahjas/desventajas de que al crear un producto se cree autoamticamente el stock en todas las sucursales o ir creando de a poco.
        await StockRepository.create({
          stock: units,
          sucursalId: sucursal.id,
          productId: newProduct.id,
        });
      }
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getAll(opt) {
    try {
      const { sucursalId, ...where } = opt;
      const filters = filterBuilder(where);

      return await productsDAO.findAll({
        ...filters,
        include: [
          {
            model: stockDAO.model,
            attributes: ["sucursalId", "stock"],
          },
          {
            model: priceDao.model,
            attributes: ["listId", "price"],
          },
        ],
      });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getById(id: number) {
    try {
      return await productsDAO.findById(id, {
        include: [
          {
            model: stockDAO.model,
            attributes: ["sucursalId", "stock"],
          },
          {
            model: priceDao.model,
            attributes: ["listId", "price"],
          },
        ],
      });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async individualBulkUpdateById(
    data,
    sucursalId: number | null = null
  ) {
    try {
      const idsNotModified: number[] = [];
      let sucursalExists: boolean = false;
      let listsNotFound: number[] = [];

      for (const product of data) {
        const {
          stock: units,
          listId,
          price,
          productId,
          ...productData
        } = product;

        if (units) {
          const where = { sucursalId, productId: productData.id };

          if (!sucursalExists) {
            // valido si existe esa sucursal antes de agregar/modificar
            await sucursalDAO.findById(sucursalId as number);
            sucursalExists = true;
          }

          try {
            const changed = await StockRepository.update(where, {
              stock: units,
            });

            if (!changed) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla stock
          } catch (error) {
            idsNotModified.push(productData.id);
          }
        }

        if (listId && price) {
          const where = { listId, productId };

          if (!listsNotFound.includes(listId)) {
            // valido si existe esa sucursal antes de agregar/modificar
            await ListsRepository.getById(listId);
            listsNotFound.push(listId);
          }

          try {
            const changed = await PricesRepository.update(where, {
              price,
            });

            if (!changed) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla prices
          } catch (error) {
            idsNotModified.push(productData.id);
          }
        }

        // verifico si no hay información para actualizar en la tabla products, para pasar al siguiente producto
        if (Object.entries(productData).length == 0) continue;

        const affected = await productsDAO.update(
          { id: productId },
          productData
        );
        if (!affected) idsNotModified.push(productData.id); // agrego los ids no modificados de la tabla products
      }

      const parsedIds = removeDuplicates(idsNotModified); // saco los ids duplicados

      if (parsedIds.length) {
        CustomError.new({
          message: "Algunos datos no se actualizaron",
          data: parsedIds,
          statusCode: 404,
        });
      }
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async linealBulkUpdateById(where, data) {
    try {
      const affectedRows = await productsDAO.update(
        {
          id: { [Op.in]: where.products },
        },
        data
      );

      return affectedRows;
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async delete(id: number) {
    try {
      return await productsDAO.delete({ id });
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getStock(where) {
    try {
      const filters = filterBuilder(where);
      const stock = await StockRepository.getAll(filters);

      return stock;
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async createList(data) {
    try {
      await ListsRepository.create(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getLists(where) {
    try {
      return await ListsRepository.getAll(where);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async setPrices(
    data: { productId: number; listId: number; price: number }[]
  ) {
    try {
      await PricesRepository.bulkCreate(data);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async getPrices(where) {
    try {
      const filters = filterBuilder(where);

      return await PricesRepository.getAll(filters);
    } catch (error) {
      throw checkErrorType(error);
    }
  }

  static async deleteListById(id: number) {
    try {
      return await ListsRepository.deleteById(id);
    } catch (error) {
      throw checkErrorType(error);
    }
  }
}

export default ProductsRepository;
