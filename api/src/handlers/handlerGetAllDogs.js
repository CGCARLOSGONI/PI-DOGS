const getAllDogsController = require("../controllers/getAllDogsController");

const handlerGetAllDogs = async (req, res) => {
    try {
        const allDogs = await getAllDogsController();
        res.status(200).json(allDogs)
    } catch (error) {
        res.status(404).json({ error:'No se encontraron perros' });
    }
}
module.exports = handlerGetAllDogs; 