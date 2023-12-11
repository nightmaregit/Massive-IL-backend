const  express  = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/index.js')
const db = require('./data/database.js')

const PORT = 3102
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(router)


app.listen(PORT,()=>console.log('server is running'))