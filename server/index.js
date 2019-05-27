let express = require('express')
let mc = require('./controllers/messages_controller.js')

let app = express()
let port = 3001

app.use(express.json())
app.use(express.static('node-2-afternoon' + '/../public/build'))
console.log(__dirname)
app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)


app.listen(port, () => console.log(`listening on port ${port}`))