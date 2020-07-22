import { Category } from './category.model';

export class Film{
    constructor(public id : number,
        public  titre : string,
        public  description : string,
        public  realisateur :  string,
        public  dateSortie : Date,
        public  duree : number,
        public  photo : string,
        public categorie :Category){

        }
}