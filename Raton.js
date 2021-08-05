import DispositivoEntrada from "./DispositivoEntrada.js";


export default class Raton extends DispositivoEntrada
{
    static contadorRatones=0;
    constructor(tipoEntrada,marca)
    {
        super(tipoEntrada,marca);
        this.idRaton=++Raton.contadorRatones;
    }

    get _idRaton()
    {
        return this.idRaton;
    }
    
    toString()
    {
        return " id raton-> "+this.idRaton+" "+super.toString();
    }

}