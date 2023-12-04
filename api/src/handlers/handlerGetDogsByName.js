// const getDogsByNameController = require('../controllers/getDogsByNameController');

// const handlerGetDogsByName = async (req, res) => {
//     const { name } = req.query;
//     try {
//         const dogByName = await getDogsByNameController(name);
         
//         if (dogByName.length) {
//             res.status(200).json(dogByName); // Devuelve el objeto del perro si se encuentra
//        }
        
//     } catch (error) {
//         res.status(404).json({ error: 'No se encontró el perro solicitado' });
//     }
// };

// module.exports = handlerGetDogsByName;

