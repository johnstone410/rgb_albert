const express = require('express')
const path = require('path')
const helmet =require('helmet')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')), helmet())

app.get('/', (req, res) => 
	res.send('Hello Logluv ')
)

app.listen(port, () =>
	console.log(`app listening at ${port}`)
)
