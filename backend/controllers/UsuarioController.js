import express from "express";
import UsuarioModel from "../backend/daos/usuario_daos.js";
const router = express.Router();

router.get("/usuarios", async (request, response) => {
    try {
        const usuarios = await UsuarioModel.find({});
        response.send(usuarios);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;