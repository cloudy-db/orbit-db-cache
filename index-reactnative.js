const level = require('asyncstorage-down')
const Cache = require('./Cache')
module.exports = Cache(level)
