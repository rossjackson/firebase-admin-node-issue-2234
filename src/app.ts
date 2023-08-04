import express from 'express'
import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { sendMessage } from 'sendMessage'

initializeApp({
    credential: applicationDefault(),
})

const app = express()
// TODO add logger
// app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const sampleRouter = express.Router()

sampleRouter.get('/', async (_req, res) => {
    console.log('sending message')
    await sendMessage()
    res.send('Hello world!')
})

app.use('/sample', sampleRouter)

export default app
