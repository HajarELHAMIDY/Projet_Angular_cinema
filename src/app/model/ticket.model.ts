export class Ticket{
    constructor(public id : number,
        public  nomClient : string,
    public  prix: number, 

    public  codePayement : number,
    public  reserve: boolean){

    }
}