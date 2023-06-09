const chai = require("chai");
const assert = chai.assert;
const { saludar } = require("../src/saludar");

describe("Verifica string", () => {
    it("Verificar si saludo recibe un string retorne un string", () => {
        let resultado = saludar("hola mundo");
        assert.isString(resultado, "no es un string.");
    });

    it("Verificar si saludo al recibir un entero retorne un string", () => {
        let resultado = saludar(2);
        assert.isString(resultado, "no es un string.");
    });

    it("Verificar si saludo al recibir un boolean retorne un string", () => {
        let resultado = saludar(false);
        assert.isString(resultado, "no es un string.");
    });
});


