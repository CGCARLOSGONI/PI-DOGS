// const apiKey = process.env.API_KEY;
// const { Dog } = require('../../src/db');


// const getAllTemeramentFromApi = async () => {
//     try {
//         const temperaments = Dog.map(dog => {
//             return dog.temperament?.split(", ").toString()
//         })
//         console.log(temperaments)
//         for (let i = 0; i < temperaments.length; i++) {
//             await Temperaments.findOrCreate({
//                 where: { name: temperaments[i].name },
//                 defaults: temperaments[i],
//             })
//         }
//         console.log(temperaments)
          
//     } catch (error) {
        
//     }
// }


// module.exports = getAllTemeramentFromApi;