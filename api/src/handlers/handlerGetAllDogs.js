const getAllDogs = require("../controllers/getAllDogs");

const handlerGetAllDogs = async (req, res) => {
    try {
        const allDogs = await getAllDogs();
        res.status(200).json(allDogs)
    } catch (error) {
        res.status(500).json({ error:'No se encontraron perros' });
    }
}
module.exports = handlerGetAllDogs; 