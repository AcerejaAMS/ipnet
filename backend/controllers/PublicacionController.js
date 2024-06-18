import express from "express";
import PublicacionModel from "../backend/daos/publicacion_daos.js";
const router = express.Router();

router.get("/publicaciones", async (request, response) => {
    try {
        const publicaciones = await PublicacionModel.find({});
        response.send(publicaciones);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;