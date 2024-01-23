const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}


// router

const router = require('./routes/productRoutes.js')
app.use('/api/product', router)

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// testing api

app.get('/', (req, res) =>{
    res.json({message: 'hello from api'})
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=>{
    console.log(`server in running on port ${PORT}`);
})