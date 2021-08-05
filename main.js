import DispositivoEntrada from "./DispositivoEntrada.js";
import Computadora from "./Computadora.js";
import Orden from "./Orden.js";
import Monitor from "./Monitor.js";
import Raton from "./Raton.js";
import Teclado from "./Teclado.js";

let raton1=new Raton("raton","noga");
let raton2=new Raton("raton","razer");
let raton3=new Raton("raton","corsa");
let teclado1=new Teclado("Teclado","noga net");
let teclado2=new Teclado("Teclado","dragon");
let teclado3=new Teclado("Teclado","razer");

let monitor1=new Monitor("hp",1.5);
let monitor2=new Monitor("lg",2.5);

let computadora1=new Computadora("dios",monitor1,teclado1,raton2,200);
let computadora2=new Computadora("medio pelo",monitor2,teclado3,raton1,100);
let computadora3=new Computadora("NAZA",monitor1,teclado2,raton3,500);

console.log("\n----mostrando raton 2----\n");
console.log(raton2.toString());
console.log("\n----mostrando teclado 3----\n");
console.log(teclado3.toString());
console.log("\n----mostrando monitor 1----\n");
console.log(monitor1.toString());
console.log("\n----mostrando computadora 1----\n");
console.log(computadora1.toString());

let orden1=new Orden();
orden1.agregarComputadoas(computadora1);
orden1.agregarComputadoas(computadora1);
orden1.agregarComputadoas(computadora3);
console.log("\n----mostrando orden 1----\n");
orden1.mostrarOrden();

console.log("\n----mostrando costo total orden 1----\n");
console.log(orden1.calcularCostoTotal()+"$");



let orden2=new Orden();
orden2.agregarComputadoas(computadora2);
orden2.agregarComputadoas(computadora2);
orden2.agregarComputadoas(computadora3);

console.log("\n----mostrando orden 2----\n");
orden2.mostrarOrden();

console.log("\n----mostrando costo total orden 2----\n");
console.log(orden1.calcularCostoTotal()+"$");
