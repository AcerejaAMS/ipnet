import express from "express";
import ComunidadModel from "../backend/daos/comunidad_daos.js";
const router = express.Router();

router.get("/comunidades", async (request, response) => {
    try {
        const comunidades = await ComunidadModel.find({});
        response.send(comunidades);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;