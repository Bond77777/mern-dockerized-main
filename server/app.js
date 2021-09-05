'use strict'

const server = require('./src/server')

const mongoose = require('mongoose')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
})

/**
 * Start server
 */
server.listen()
