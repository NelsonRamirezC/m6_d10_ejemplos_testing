const chai = require("chai");
const chaiHttp = require("chai-http");
const servidor = require("../src/app");

chai.use(chaiHttp);

describe("Testing de rutas servidor x...", () => {
    it("Ruta para path (/) sea un string y codigo 200", () => {
        let respuesta = chai.request(servidor).get("/");
        respuesta.end((error, data) => {
            chai.assert.isString(
                data.text,
                "ok",
                "respuesta no es la esperada."
            );
            chai.assert.equal(
                data.status,
                200,
                "Código de estado no coincide."
            );
        });
    });
    it("Testing path /productos sea objeto y tenga propiedad productos (array)", () => {
        let respuesta = chai.request(servidor).get("/productos");
        respuesta.end((error, data) => {
            let productos = JSON.parse(data.text);
            chai.assert.equal(
                data.status,
                200,
                "Código de estado no coincide."
            );

            chai.assert.isObject(productos, "Repuesta no es un objeto.");
            chai.assert.isArray(productos.productos, "no es un array");
        });
    });
    it("Testing rutas not found GET, debe existir respuesta not found", () => {
        let respuesta = chai.request(servidor).get("/rutaprueba");
        respuesta.end((error, data) => {
            chai.assert.equal(
                data.text,
                "Ruta GET no encontrada.",
                "No cumple con ruta not found."
            );
        });
    });
    it("Testing rutas not found POST, debe existir respuesta not found", () => {
        let respuesta = chai.request(servidor).post("/rutaprueba");
        respuesta.end((error, data) => {
            chai.assert.equal(
                data.text,
                "Ruta POST no encontrada.",
                "No cumple con ruta not found."
            );
        });
    });
    servidor.close();
});
