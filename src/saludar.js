const saludar = (saludo) => {
    let resultado = String(saludo).toLocaleUpperCase();
    return resultado;
};
module.exports = {
    saludar,
};
