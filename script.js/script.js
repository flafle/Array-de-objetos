//utilizo como ejemplo mi pagina de desarrollo web que cuenta con encuadernacion artesanal y productos de distinto tipo.

const encuadernacion1 = ["Floral", "Constelacion", "bosque", "Ciudad", "Frutal"]
const encuadernacion2 = ["cuadriculadas", "rayadas", "lisas"]

const encuadernaciones = encuadernacion1.concat(encuadernacion2) //para almacenar mis productos de distintos tipos
console.log(encuadernaciones)

console.log(encuadernaciones.includes("Floral")); //utilizo metodo para buscar producto de tapa "Floral"