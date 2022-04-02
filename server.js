const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("./src/index.html")
})

app.get('/js/three.js', (req, res) => {
    res.sendFile("./src/js/three.js")
})
app.get('/js/editor.js', (req, res) => {
    res.sendFile("./src/js/editor.js")
})
app.get('/js/save.js', (req, res) => {
    res.sendFile("./src/js/save.js")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})