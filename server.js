const express = require("express")

const app = express();

app.get('/',(req,res) =>{
    res.send("hello word");
})
const port = 3000;

app.listen(port,()=> {
    console.log("server is running on localhost:3000")
})