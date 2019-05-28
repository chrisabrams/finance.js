process.on('uncaughtException', function(e) {
  console.error(e)
})

process.on('unhandledRejection', function(e) {
  console.error(e)
})

process.env.TS_NODE_PROJECT = 'tsconfig.json'
process.env.TS_CONFIG_PATHS = true
require('ts-mocha')

const glob = require('glob')
const path = require('path')

const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: 20000,
  reporter: 'spec'
})

const files = glob.sync(path.join(__dirname, '..', 'test/**/*[unit|integration]/**/*.ts'))

for (const file of files) {
  mocha.addFile(file)
}

// Run the tests.
mocha.run(async function cleanUp(failures) {
  process.exit(failures ? 1 : 0)
})
