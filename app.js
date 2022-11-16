const concesionaria = require('./concesionaria');
compradores = [{
    "nombre": "Ana",
    "capacidadDePagoEnCuotas": 13000,
    "capacidadDePagoTotal": 170000
},
{
    "nombre": "Juan",
    "capacidadDePagoEnCuotas": 23000,
    "capacidadDePagoTotal": 270000
},
{
    "nombre": "Pedro",
    "capacidadDePagoEnCuotas": 33000,
    "capacidadDePagoTotal": 370000
},
{
    "nombre": "Maria",
    "capacidadDePagoEnCuotas": 43000,
    "capacidadDePagoTotal": 470000
},
]
//console.log(concesionaria.buscarAutos('IFB377'));
//console.log(concesionaria.autosparalaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listadeVentas());
//console.log(concesionaria.totaldeVentas());
//console.log(concesionaria.puedeComprar(concesionaria.autos[0], compradores[0]));
let auto = concesionaria.autosparalaVenta();
let comprador = compradores[3];
console.log(concesionaria.autosQuePuedeComprar(comprador));