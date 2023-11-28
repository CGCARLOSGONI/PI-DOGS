const {Dog} =require('../../src/db')

const getAllDogsController = async () => {
    const getAllDogs = await Dog.findAll();
    return getAllDogs;
};

module.exports = getAllDogsController;