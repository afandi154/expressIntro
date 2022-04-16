const express = require('express')
const app = express()
const router = require('./routes')
const log = require('./middleware/logger')

// Logger
app.use(log)

// Routes
app.use(router)

// Handle Page 404
app.use((req, res) => {
  res.send({
    status: "failed",
    message: `Page ${req.originalUrl} Not Found`
  })
})

// Open Port and Logging every Changes
app.listen(3000, () => console.log('Server is running at : http://localhost:3000'))