
import './App.css';
import express from "express";
import dotenv from 'dotenv';
import DB from "./backend/config/ds.js";
import UsuarioRouter from "./backend/controllers/UsuarioController.js";
import PublicacionRouter from "./backend/controllers/PublicacionController.js";
import ConversacionRouter from "./backend/controllers/ConversacionController.js";
import ComunidadRouter from "./backend/controllers/ComunidadController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", UsuarioRouter);
app.use("/", PublicacionRouter);
app.use("/", ConversacionRouter);
app.use("/", ComunidadRouter);

DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api`);
});

export default App;
