export default class DispositivoEntrada
{
    constructor(tipoEntrada,marca)
    {
        this.tipoEntrada=tipoEntrada;
        this.marca=marca;
    }

    get _tipoEntrada()
    {
        return this.tipoEntrada;
    }
    set _tipoEntrada(nuevoTipo)
    {
        this.tipoEntrada=nuevoTipo;
    }
    get _marca()
    {
        return this.marca;
    }
    set _marca(nuevoMarca)
    {
        this.marca=nuevoMarca;
    }
    toString() {return `tipo entrada: ${this.tipoEntrada} marca: ${this.marca}`;}
}

