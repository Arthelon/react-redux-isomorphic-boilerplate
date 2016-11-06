const router = require("express").Router()
const ReactDOMServer = require("react-dom/server")
const React = require("react")
const App = require("./app/App").default

router.get("*", (req, res) => {
    const reactString = ReactDOMServer.renderToString(<App />)
    res.render("index", {
        react: reactString
    })
})

module.exports = router
