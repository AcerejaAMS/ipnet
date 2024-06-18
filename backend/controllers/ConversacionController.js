import express from "express";
import ConversacionModel from "../backend/daos/conversacion_daos.js";
const router = express.Router();

router.get("/conversaciones", async (request, response) => {
    try {
        const conversaciones = await ConversacionModel.find({});
        response.send(conversaciones);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;