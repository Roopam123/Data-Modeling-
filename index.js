const express = require("express");
const app = express();
const port = 8000;

app.listen(port,()=>{
    console.log(`Your app successfully running on the ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello I am Roopam")
})