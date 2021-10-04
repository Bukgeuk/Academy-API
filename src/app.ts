import App from "./router"
import { createServer } from "http"

const port: number = Number(process.env.PORT) || 8080

const server = createServer(App).listen(port)

server.on("error", () => {

})

server.on("listening", () => {
    console.log(`Server running on ${port}`)
})