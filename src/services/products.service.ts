import Products from "../repositories/products.rep";
import Colors from "../repositories/colors.rep";
import Sizes from "../repositories/sizes.rep";

import { validateProduct, validatePrices, PricesShape } from "@utils/schemas";

import CustomError from "@utils/errors/customError";
import { deleteUndefinedProps } from "@utils/filter-builder.util";

export default class ProductsService {
  static async create(data, opt) {
    try {
      const products: object[] = [];

      for (const product of data.products) {
        const result = validateProduct(product);

        if (!result.success)
          CustomError.new({
            message: "La petición contiene campos inválidos",
            data: result.error,
            statusCode: 400,
          });

        products.push(product);
      }

      for (const product of products) {
        await Products.create({ ...product, sucursalId: opt.sucursalId });
      }
    } catch (error) {
      throw error;
    }
  }

  static async getAll(data) {
    try {
      return await Products.getAll(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Products.getById(parseInt(id));
    } catch (error) {
      throw error;
    }
  }

  static async update(data, query) {
    try {
      //validar porque se cuelga cuando hay campos inexistentes
      data.type == "individual"
        ? await Products.individualBulkUpdateById(
            data.products,
            query.sucursalId
          )
        : await Products.linealBulkUpdateById(data.where, data.updates);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data, query) {
    try {
      return await Products.individualBulkUpdateById(
        [{ ...data, id: parseInt(id) }],
        query.sucursalId
      );
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string) {
    try {
      return await Products.delete(parseInt(id));
    } catch (error) {
      throw error;
    }
  }

  // LISTS

  static async createList(data) {
    try {
      //validar

      await Products.createList(data);
    } catch (error) {
      throw error;
    }
  }

  static async getLists(query) {
    try {
      return await Products.getLists(query);
    } catch (error) {
      throw error;
    }
  }

  static async deleteListById(listId: string) {
    try {
      await Products.deleteListById(parseInt(listId));
    } catch (error) {
      throw error;
    }
  }

  // COLORS

  static async createColor(data) {
    try {
      //validar

      await Colors.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getColors(query) {
    try {
      return await Colors.getAll(query);
    } catch (error) {
      throw error;
    }
  }

  static async updateColorById(id: string, data) {
    try {
      return await Colors.updateById(parseInt(id), data);
    } catch (error) {
      throw error;
    }
  }

  static async deleteColorById(colorId: string) {
    try {
      await Colors.deleteById(parseInt(colorId));
    } catch (error) {
      throw error;
    }
  }

  // SIZES

  static async createSize(data) {
    try {
      //validar

      await Sizes.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async updateSizeById(id: string, data) {
    try {
      return await Sizes.updateById(parseInt(id), data);
    } catch (error) {
      throw error;
    }
  }

  static async getSizes(query) {
    try {
      return await Sizes.getAll(query);
    } catch (error) {
      throw error;
    }
  }

  static async deleteSizeById(sizeId: string) {
    try {
      await Sizes.deleteById(parseInt(sizeId));
    } catch (error) {
      throw error;
    }
  }

  // STOCK

  static async getStockById(productId: string, query) {
    try {
      return await Products.getStock(
        deleteUndefinedProps({
          productId,
          sucursalId: query.sucursalId,
        })
      );
    } catch (error) {
      throw error;
    }
  }

  // PRICES

  static async setPricesById(data) {
    try {
      const prices: PricesShape[] = [];

      for (const productPrices of data.prices) {
        const result = validatePrices(productPrices);

        if (!result.success)
          CustomError.new({
            message: "La petición contiene campos inválidos",
            data: result.error,
            statusCode: 400,
          });

        prices.push(productPrices);
      }

      await Products.setPrices(prices);
    } catch (error) {
      throw error;
    }
  }

  static async getPricesById(productId: string, query) {
    try {
      return await Products.getPrices({
        productId: parseInt(productId),
        ...query,
      });
    } catch (error) {
      throw error;
    }
  }

  static async getPrices(query) {
    try {
      return await Products.getPrices(query);
    } catch (error) {
      throw error;
    }
  }

  static async updatePricesById(data) {
    try {
      const prices: PricesShape[] = [];

      for (const productPrices of data.prices) {
        const result = validatePrices(productPrices);

        if (!result.success)
          CustomError.new({
            message: "La petición contiene campos inválidos",
            data: result.error,
            statusCode: 400,
          });

        prices.push(productPrices);
      }

      await Products.individualBulkUpdateById(prices);
    } catch (error) {
      throw error;
    }
  }
}
