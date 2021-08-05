export default class Monitor
{
    static contadorMonitor=0;
    constructor(marca,tamanio)
    {
        this.marca = marca;
        this.tamanio = tamanio;
        this.idMonitor=++Monitor.contadorMonitor;
    }

    get _marca()
    {
        return this.marca;
    }

    set _marca(nuevaMarca)
    {
        this.marca=nuevaMarca;
    }

    get _tamanio()
    {
        return this.tamanio;
    }

    set _tamanio(nuevaTam)
    {
        this.tamanio=nuevaTam;
    }
    get _idMonitor()
    {
        return this.idMonitor;
    }

    toString() {return `marca: ${this.marca} tamanio: ${this.tamanio}`;}

}