export default class Orden
{
    static contadorOrden=0;
    constructor()
    {   
        this.idOrden=++Orden.contadorOrden;

        this.computadoras=[];
    }

    agregarComputadoas(computadora){
        this.computadoras.push(computadora);
    }
    mostrarOrden()
    {
        let computadorasAgregadas="";

        for(let computadora of this.computadoras)
        {
            computadorasAgregadas+=computadora.toString()+" ";
        }
        console.log(computadorasAgregadas);
    }

    calcularCostoTotal()
    {
        let costoTotal=0;

        for(let compuActual of this.computadoras)
        {
            costoTotal+=compuActual.precio;
        }

        return costoTotal;
    }
    toString()
    {
       return mostrarOrden();
    }
}