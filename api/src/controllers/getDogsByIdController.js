const {Dog} =require('../../src/db');

const getDogsByIdController = async (id) => {
    const getDogById = await Dog.findByPk(id);
    return getDogById;
}

module.exports = getDogsByIdController;