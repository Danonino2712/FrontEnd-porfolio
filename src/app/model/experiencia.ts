export class Experiencia {
    id?: number;
    empresa: string;
    puesto: string;
    inicio: string;
    fin: string;
    descripcion: string;

    constructor(empresa:string, puesto:string, inicio:string, fin:string, descripcion:string){
        this.empresa = empresa;
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin = fin; 
        this.descripcion = descripcion;
    }
}
