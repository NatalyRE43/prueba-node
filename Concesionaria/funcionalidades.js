let autos = [{ marca: "Ford", modelo: "Fiesta",color: "Azul", anio: 2019, km: 200, precio: 150000,  cuotas: 12,  patente: "APL123", vendido: false}, {marca: "Toyota", modelo: "Corolla", color: "Blanco", anio: 2019, km: 0, precio: 100000, cuotas: 14,  patente: "JJK116", vendido: false} 
];
var requerir = require("./autos");
let concesionaria = {
   autos: this.autos,
   buscarAuto: function (patente){  
   let filtrarAuto = this.autos.filter(function(auto){
      return auto.patente === patente
   });
      if (filtrarAuto.length === 0){
         return null
      } else {
         return filtrarAuto[0];
      }
   },
   venderAuto: function (patente){
      let vendido = this.buscarAuto(patente)
      return vendido.vendido = true
   },
   autosParaLaVenta: function(){
      let autosDisponibles = (this.autos).filter(function(autoPickUp){
         return autoPickUp.vendido != true;
      });
   }
}
console.log(concesionaria.buscarAuto("JJK116"));
console.log(concesionaria.buscarAuto('APL123'));
console.log(concesionaria.buscarAuto('JA123'));


