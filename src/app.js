const express = require("express");
const app = express();

const servidor = app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});

let productos = {
    productos: [
        {
            nombre: "Pan",
        },
        {
            nombre: "Leche",
        },
        {
            nombre: "Galletas",
        },
    ],
};

app.get("/", (req, res) => {
    res.status(200).send("ok");
});

app.get("/productos", (req, res) => {
    res.status(200).send(productos);
});

app.all("*", (req, res) => {
    res.status(200).send(`Ruta ${req.method} no encontrada.`);
});

module.exports = servidor;
