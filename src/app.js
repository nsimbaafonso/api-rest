import express from "express" 
import routes from "./routes.js"

const app = express()

app.use(express.json()) 

//Usando o router
app.use(routes)

export default app
//para rodar o projeto, vamos no terminal e digitamos: npm run dev
