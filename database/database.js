import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const user = process.env.user;
const password = process.env.password;
const host = process.env.host;
const port = process.env.port;
const database = process.env.database;

export const sequelize = new Sequelize( database , user, password, {
  host: host,
  port: port,
  dialect: "mysql",
});

export default sequelize;