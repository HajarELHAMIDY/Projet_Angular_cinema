import { Ville } from './ville.model';

export class Cinema{
    constructor(
        public   id: number,
        public  name: string,
        public  longitude :number,
        public labtitude:number,
        public  nombreSalles:number,
        public ville :Ville
    ){

    }
}