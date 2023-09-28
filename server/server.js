const express = require('express');
const app = express();

app.get('/' , (req,res) =>{
    res.send('<h1> hello </h1>')
})

const port = 3002

app.listen(port , () => {
    console.log(`server running on port ${port}`)
})