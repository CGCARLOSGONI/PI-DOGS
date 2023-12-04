
const server = require('./src/app.js');
const getAllDogsFromApi = require('./src/controllers/getAllDogsFromApi.js');
const getAllTemeramentFromApi = require('./src/controllers/getAllTemperamentFromApi.js');
const { conn, Dog, Temperaments } = require('./src/db.js');

// Syncing all the models at once.

// Busco los dogs en db
// Si no tengo dogs en db, es porque tengo que pedirlos a la api y guardarlos: getAllDogsFromApi()

conn.sync({ force: false }).then(() => { // force: true hace que se reinicie la db cada vez que inicializo la app (npm start)
  server.listen(3001, () => {
    console.log('%s listening at 3001');
    const dbDogs = Dog.findAll()
    if (!dbDogs.length) {
      getAllDogsFromApi()
    }
  })
}).catch(error => console.error(error))