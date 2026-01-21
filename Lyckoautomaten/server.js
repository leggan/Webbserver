const express = require('express')
const app = express()

app.use(express.static('public'));

app.get("/api/lucky", (req, res) => {
    const minNumber = 0
    const maxNumber = 100
    const randomNumber = Math.floor(Math.random() * maxNumber)
    const date = new Date().toString()
    res.json({
        "number" : randomNumber,
        "min" : minNumber,
        "max" : maxNumber,
        "date": date
    })
})

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(3000, () => {
    console.log("Running")
})