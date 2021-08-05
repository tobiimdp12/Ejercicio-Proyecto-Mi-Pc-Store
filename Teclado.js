import DispositivoEntrada from "./DispositivoEntrada.js";

export default class Teclado extends DispositivoEntrada 
{
    static contadorTeclado=0;
    constructor(tipoEntrada,marca)
    {
        super(tipoEntrada,marca);
        this.idTeclado=++Teclado.contadorTeclado;
    }

    get _idRaton()
    {
        return this.idRaton;
    }
    
    toString()
    {
        return " id teclado-> "+this.idTeclado+" "+super.toString();
    }

}