const fs = require('fs');
const escribirJSON = function(data){
    fs.writeFileSync("./data/autos.json", JSON.stringify(data),"utf-8")

} 
const concesionaria= {
    autos: JSON.parse(fs.readFileSync("./data/autos.json", {encoding: "utf-8"})),
    buscarAutos: function(patente){
        let autoEncontrado = this.autos.find(function(auto){
            return auto.patente===patente;
        });
        if(autoEncontrado===undefined){
            return null;
        }
        
        return autoEncontrado;
    },
    venderAuto: function(patente){
        let auto = this.buscarAutos(patente);
        if(auto!==null){
            auto.vendido = true;
            escribirJSON(this.autos);
        }
        return this.autos;
    },
    autosparalaVenta: function(){
        let autosFiltrados = this.autos.filter(function(auto){
            return auto.vendido === false;
        });
        return autosFiltrados;
    },
    autosNuevos: function(){
        let autosparalaVenta = this.autosparalaVenta();
        return autosparalaVenta.filter(function(auto){
            return auto.km <= 100;
        })
    },
    listadeVentas: function(){
        let autosVendidos = this.autos.filter(function(auto){
            return auto.vendido
        });
        let listadeVentas = autosVendidos.map(function(auto){
            return auto.precio;
        })
        return listadeVentas;
    },
    totaldeVentas: function(){
        let listadeVentas = this.listadeVentas();
        if(listadeVentas.length > 0){
            let totaldeVentas = listadeVentas.reduce(function(acum, currentValue){
                return acum + currentValue;
            })
            return totaldeVentas;
        }else{
            return 0
        }
    },
    puedeComprar: function(auto, comprador){
        valorCuota = auto.precio/auto.cuotas;
        return auto.precio <= comprador.capacidadDePagoTotal && comprador.capacidadDePagoEnCuotas >= valorCuota;
    },
    autosQuePuedeComprar: function(comprador){
        let autosDisponibles =  this.autosparalaVenta();
        let autosQuePuedeComprar = autosDisponibles.filter((auto) => {
            return this.puedeComprar(auto, comprador);
        })
        return autosQuePuedeComprar;
    }
}

module.exports = concesionaria;
