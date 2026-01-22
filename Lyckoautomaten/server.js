const express = require('express')
const app = express()
const session = require("express-session")
const dotenv = require("dotenv").config()




app.use(express.static('public'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}))

app.get("/api/lucky", (req, res) => {
    if(!req.session.totalData) {
        req.session.totalData = []
    }
    const minNumber = 0
    const maxNumber = 100
    const randomNumber = Math.floor(Math.random() * maxNumber)
    const date = new Date().toString()
    const data = {
        "number" : randomNumber,
        "min" : minNumber,
        "max" : maxNumber,
        "date": date
    }
    if(req.session.totalData.length < 10) {
        req.session.totalData.push(data)
    } else {
        req.session.totalData.pop()
        req.session.totalData.push(data)
    }
    res.json(data)
    console.log(JSON.stringify(req.session.totalData, null, 2))
    
    
})

app.get("/", (req, res) => {
    req.session.totalData = []
    
    console.log("Crazy")
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("Running")
})