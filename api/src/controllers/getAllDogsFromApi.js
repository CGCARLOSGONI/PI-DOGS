const axios = require('axios');
const { Dog } = require('../../src/db');
const apiKey = process.env.API_KEY;
const URL = `https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`

const getAllDogsFromApi = async () => {
    try {

        const getApi = await axios.get(URL)
        const dogs = getApi.data.map(dog => ({
            id: dog.id,
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
    } catch (error) {
        console.error('No se cargo la base de datos', error.message)
    }

}

module.exports = getAllDogsFromApi;