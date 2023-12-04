const axios = require('axios');
const { Dog } = require('../../src/db');
const apiKey = process.env.API_KEY;
const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`

// Le pide los dogs a la API y los guarda en la base de datos
const getAllDogsFromApi = async () => {

    try {
        const response = await axios.get(URL)
        const dogs = response.data.map(dog => ({
            name: dog.name,
            image: dog.reference_image_id,
            height: dog.height.imperial,
            weight: dog.weight.imperial,
            life_span: dog.life_span
        })
        );
        for (let i = 0; i < dogs.length; i++) {
            await Dog.findOrCreate({
                where: { name: dogs[i].name },
                defaults: dogs[i],
            })
        }
        console.log(`Termine de crear los ${dogs.length} dogs`)
    } catch (error) {
        console.error('solicitudes sin exito', error.message)
    }

}

module.exports = getAllDogsFromApi;