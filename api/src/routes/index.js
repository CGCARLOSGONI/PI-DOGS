const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const handlerGetAllDogs = require('../handlers/handlerGetAllDogs')
const handlerGetDogsById = require('../handlers/handlerGetDogsById');
const handlerGetDogsByName = require('../handlers/handlerGetDogsByName');
 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs/', handlerGetAllDogs);

// router.get('/dogs/:id', handlerGetDogsById);

// router.get('/dogs/name', handlerGetDogsByName)

module.exports = router;
