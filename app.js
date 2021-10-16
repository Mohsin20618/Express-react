const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')


app.use('/', express.static(path.join(__dirname, 'react-web/build')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/profile', (req, res) => {
    res.send('here is your profile')
})
app.post('/profile', (req, res) => {
    res.send('profile created')
})
app.put('/profile', (req, res) => {
    res.send('profile updated')
})
app.delete('/profile', (req, res) => {
    res.send('profile deleted')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})