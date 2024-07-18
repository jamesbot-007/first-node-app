const express = require('express')

const app = express()

const port = process.env.PORT || 8000;

app.get("/", (req,res) => {
    res.send("hello world <br><h2>Congratualtion on first hosted first node app</h2>");
})

app.listen(port,() => {
    console.log("listing on http://localhost:8000")
})