export class Todo {

    public id!: number;
    public texto!: string;
    public completado!: boolean;

    constructor( texto: string ) {
        this.texto = texto ;
        this.id = Math.random() ; // esto simulara un id proveniente de db
        this.completado = false ;
    }

}