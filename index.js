import app from "./app.js";
import { sequelize } from "./database/database.js";


import './models/AboutUsDev.js'
import './models/Class.js'
import './models/Feedback.js'
import './models/LevelClass.js'
import './models/NutritionContent.js'
import './models/Payment.js'
import './models/Physiotherapist.js'
import './models/StatusClass.js'
import './models/User.js'
import './models/Teacher.js'
import './models/Rol.js'
import './models/TypeClass.js'
import './models/UserClass.js'


const serverPort = process.env.serverPort;

async function main() {
  try {
    await sequelize.sync({force: false })
    console.log("Connection has been established successfully.");
    app.listen(serverPort)
    console.log("Server is listening " + serverPort);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

}

main();