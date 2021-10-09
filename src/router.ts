import * as express from "express"
import * as fs from "fs-extra"
import * as cors from "cors"

const App: express.Application = express.default()

App.use(cors.default())

App.get("/lecture", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    fs.readJson(`./data/lecture.json`, (err, data) => {
        if (err)
            res.status(500).send('Internal Server Error')
        else
            res.json(data)
    })
})

App.get("/lecture/image/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    fs.readFile(`./data/lecture/image/${req.params.id}.png`, (err, data) => {
        if (err)
            res.status(500).send('Internal Server Error')
        else
            res.send(data)
    })
})

App.get("/lecture/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    fs.readJson(`./data/lecture/${req.params.id}.json`, (err, data) => {
        if (err)
            res.status(500).send('Internal Server Error')
        else
            res.json(data)
    })
})

App.get("/lecture/:lid/:uid/:suid", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    fs.readFile(`./data/lecture/${req.params.lid}/${req.params.uid}/${req.params.suid}.md`, (err, data) => {
        if (err) {
            fs.readFile(`./data/lecture/${req.params.lid}/${req.params.uid}/${req.params.suid}.json`, (err, data) => {
                if (err)
                    res.status(500).send('Internal Server Error')
                else
                    res.send(data)
            })
        }         
        else
            res.send(data)
    })
})

export default App;