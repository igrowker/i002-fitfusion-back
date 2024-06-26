import express from "express"
import router from "./router.js"

//Bienvenido a la api de FitFusion
//El flujo va ser el siguente
//1. En en el archivo router.js se crean las funciones que van a estar guardadas en la carpeta routes
//Aclaracion! las rutas a igual que los handlers van a ir separadasen carpetas
//con el nombre de la funcion o ruta que se quiera crear.  
// ej: routes/getIdUserRoute/getIdUserRoute.js
// ej: handlers/getIdUser/getIdUser.js

const app = express()
const serverPort= 3000

app.listen(serverPort, ()=>{
    console.log("Hola mundo en el puerto " + serverPort)
})

app.use(express.json())
app.use(router)