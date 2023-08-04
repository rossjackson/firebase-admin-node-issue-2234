import http from 'http'
import app from './src/app'

const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`Server running on port 8080`)
})
