
export default class Computadora
{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton,precio)
    {
        this.idComputadora=Computadora.contadorComputadoras;
        this.nombre=nombre;
        this.monitor=monitor;
        this.teclado=teclado;
        this.raton=raton;
        this.precio=precio;
    }

    get _nombre()
    {
        return this.nombre;
    }

    set _nombre(nuevoNombre)
    {
        this.nombre=nuevaNombre;
    }

    get _monitor()
    {
        return this.monitor;
    }

    set _monitor(nuevoMonitor)
    {
        this.monitor=nuevoMonitor;
    }

    get _teclado()
    {
        return this.teclado;
    }

    set _teclado(nuevoTeclado)
    {
        this.teclado=nuevoTeclado;
    }

    get _raton()
    {
        return this.raton;
    }

    set _raton(nuevoRaton)
    {
        this.raton=nuevoRaton;
    }

    get _precio()
    {
        return this.raton;
    }

    set _precio(nuevoPrecio)
    {
        this.precio=nuevoPrecio;
    }
    toString() {return `nombre: ${this.nombre} \n monitor: ${this.monitor.toString()} \n teclado: ${this.teclado.toString()} \nraton: ${this.raton.toString()}\n precio: ${this.precio}$`;}
}