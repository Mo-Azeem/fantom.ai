const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const multer  = require('multer')
const cors = require('cors')
const utils = require('./utils.js')

const app = express()
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/is-online', function (req, res) {
    res.status(200).send("Online")
})

app.post('/api',multer().none(), async function(req,res){
    const results = await utils.results(req.body.txt, res)
    const status_code = req.body.txt.trim() === "" ? 400 : 200; 
    
    res.status(status_code).send(results)
})
