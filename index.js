require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/twitter', (req, res) => {
     res.send('Welcome to the <a href="https://www.twitter.com"> Twitter </a>');
});

app.get('/login', (req, res) => {
     res.send('<h1>Please Login at my Application first</h1>');
});

app.get('/youtube', (req, res) => {
     res.send("<a href='https://www.youtube.com'>YouTube</a>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})