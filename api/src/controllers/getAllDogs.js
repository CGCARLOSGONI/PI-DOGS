const {Dog} =require('../db')

// Aca es donde vas a buscar los perros dependiendo el approach que sigas: api y db o solo db
const getAllDogs = async () => {
    // const response = axios.get(URL)
    // const dogsApi = response.data 
    const dogsDb = await Dog.findAll();

    // return [...dogsApi, ...dogsDb]
    return dogsDb;
};

module.exports = getAllDogs;