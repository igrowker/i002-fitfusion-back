import { Sequelize } from "sequelize";

const user = process.env.user
const password = process.env.password
const host = process.env.host
console.log(user, password, host)

export const sequelize = new Sequelize('fitfusion', user, password, {
    host: host,
    dialect: "mysql"
  });