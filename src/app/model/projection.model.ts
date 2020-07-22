import { Film } from './film.model';

export class Projection{
    constructor(
        public id: number,
        public  dateProjection : Date,
        public  prix: number, 
        public film : Film
    ){

    }
}