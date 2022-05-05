var autos = require("./autos");

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente){  
   let filtrarAuto = this.autos.filter(function(auto){
      return auto.patente === patente;
   });
      if (filtrarAuto.length === 0){
         return null;
      } else {
         return filtrarAuto[0];
      }
   },

   venderAuto: function (patente){
      let vendido = this.buscarAuto(patente)
      return vendido.vendido = true;
   },

   autosParaLaVenta: function(){
      let auto = this.autos.filter(function(elm){
         return !elm.vendido;
      })
      return auto;
   },
                                 //callback
   autosNuevos: function(autosParaLaVenta){
      //this.autos.km < 100 ? autosParaLaVenta () : null
      let autos0km = this.autosParaLaVenta().filter(function(ceroKm){
         return ceroKm.km < 100
      })
      return autos0km;
   },

   listaDeVentas: function(){
        let listado = this.autos.filter(function(lista){
           return lista.vendido
        });
        return listado.map(function(lista){
           return lista.precio
        })
    },

   totalDeVentas: function(){
      return this.listaDeVentas().reduce((acum,total) => acum + total, 0);
    }, 
   /*() => {
        return this.listaDeVentas().reduce((acum,total) => acum + total, 0);
    },*/


   /*function (){
      let suma = this.listaDeVentas().reduce(function(acum, total){
         return acum + total
   })
   return suma;
   },*/

// *********** Función puedeComprar ***********
// {
//nombre: “Juan”,
//capacidadDePagoEnCuotas: 20000,
//capacidadDePagoTotal: 100000
//}
   puedeComprar: function(auto, persona){
      let cuotas = auto.precio / auto.cuotas; //Se dividen las cuotas entre el precio
      if ((persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= cuotas)){
         return true;
      } else {
         return false;
      }
   },

   autosQuePuedeComprar: function(persona){
         return this.autosParaLaVenta().filter(elemento => 
            this.puedeComprar(elemento, persona));
         } 
}


console.log(concesionaria.buscarAuto("JJK116"));
console.log(concesionaria.buscarAuto('APL123'));
console.log(concesionaria.buscarAuto('JA123'));


