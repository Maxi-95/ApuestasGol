const { Router } = require("express");
const { ApiPartidos } = require("../controllers/00_juegosController.js");
const router = Router();

router.get("/partidos", async (req, res) => {
  try {
    const todosLosJuegos = await ApiPartidos();

    res.status(200).json(todosLosJuegos);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
