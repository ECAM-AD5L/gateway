const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Log every query on STDOUT
app.use(logger('dev'))

// Add body to req
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// API Routes
app.use('/api', require('./api/router'))

// Serving Modules
app.use('/modules', express.static(path.join(__dirname, 'node_modules')))

// Serving Client
app.use(express.static(path.join(__dirname, 'public')))

// Catch 404
app.use((req, res) => {
	let err = new Error('Not Found')
    err.status = 404
    res.status(404).send('404 not found')
});

// Error Handler
app.use((err, req, res, next) => {
    console.log(err);
})

var port = Number(process.env.PORT || 8080);
app.listen(port);
console.log('Magic happens on port ' + port);