const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.end('Hello World');
}) 

app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log('Server is running')
