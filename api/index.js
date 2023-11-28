
const server = require('./src/app.js');
const getAllDogsFromApi = require('./src/controllers/getAllDogsFromApi.js');
const getAllTemeramentFromApi = require('./src/controllers/getAllTemperamentFromApi.js');
const { conn, Dog, Temperaments } = require('./src/db.js');
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
    const dbDogs = Dog.findAll()
    if (!dbDogs.length) {
      getAllDogsFromApi()
    }
  })
}).catch(error => console.error(error))

