import { Sequelize } from "sequelize";

import dotenv from 'dotenv';

dotenv.config();

const user = process.env.user
const password = process.env.password
const host = process.env.host

export const sequelize = new Sequelize('dbfitfusion', user, password, {
    host: host,
    dialect: "mysql"
});

export default sequelize;