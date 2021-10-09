import App from "./router"
import { createServer } from "http"
import dotenv from "dotenv"

dotenv.config()

const port: number = Number(process.env.PORT)

const server = createServer(App).listen(port)

server.on("error", () => {

})

server.on("listening", () => {
    console.log(`Server running on ${port}`)
})