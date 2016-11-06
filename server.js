const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const bodyParser = require("body-parser")
const compression = require("compression")
const cors = require("cors")
const routes = require("./routes")
require("dotenv").config()
require("node-jsx").install({
    harmony: true
})

app.set("view engine", "pug")
app.use(cors())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use("/", routes)

app.use(function(req, res, next) { // Forward 404 request to handlers
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    if (err.status === 404) {
        res.status(404).json({
            success: false,
            message: "endpoint not found"
        })
    } else {
        next(err)
    }
})
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message || 'Internal server error'
    })
    console.log(err)
});

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
