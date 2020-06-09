const storage = require('azure-storage')
const service = storage.createTableService('opmagazyn','j8oe5Wd5Rz/07/pp17JBfkO7ajufnzhlG4/zCmjnhzLDxyNG/lcOTSEEswhaY1rmdN821uHVoSrHLVy0EluOKg==')
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}