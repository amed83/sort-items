const express = require('express');
const products = require('./products.json')

const app = express()

app.get('/prod', (req,res)=>{
    res.send(JSON.stringify(products))
    
})


app.listen(5000,()=> console.log('Listening on port 5000'))