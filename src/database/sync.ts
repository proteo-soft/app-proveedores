import { config } from "dotenv";
config();

import sequelize from "./connect";
import "../models/index.model";

sequelize.sync({ force: true });
