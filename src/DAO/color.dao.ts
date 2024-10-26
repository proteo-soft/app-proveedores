import { BaseDAO } from "./base.dao";

import Color from "../models/color.model";

class ColorDAO extends BaseDAO<Color> {
  constructor() {
    super(Color);
  }
}

export default new ColorDAO();
