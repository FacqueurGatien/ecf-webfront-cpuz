import { Db } from "../Db.js"
import { Processor } from "./Processor.js";

class ProcessorsCollection{
    // Constructeur
    constructor(){
        this.data=[];
        this.sortDirection=true;
    }
    // 1: Permet d'initialiser une collection d'information de processeur à partir d'un Json
    // 2: Parcours la collection et pour chaque donnée instancie un objet Processeur
    // 3: Apelle de la fonction UpdateActualData();
    async load(){
        this.data = await Db.getDb("../cpuz.json");
        this.data = this.data.map(c=>c=new Processor(c));
        this.updateActualData();
    }
    // Permet de filtrer et renvoyer la collection en fonction d'une valeur en paramettre
    // La valeur provient d'un input de la page html
    searchArray(value){
        let array =  this.data.filter(c=>c.fullName.toLowerCase().includes(value.toLowerCase()));
        this.updateActualData(array);
        return array
    }
    // Permet d'initialiser/mettre a jours la colection actualData (permettant de ne pas ecraser la collection d'origine)
    updateActualData(array = this.data){
        this.actualData = Array.from(array);
    }
    // Permet de trier la collumn ciblé par le paramettre
    sortColumn(title){
        let arraySort=[];
        if(typeof(this.data[0][title])!="string"){
            arraySort = this.actualData.sort((a,b)=>a[title]-b[title]);
        }
        else{
            arraySort = this.actualData.sort((a,b)=>a[title].toString().localeCompare(b[title].toString()));
        }
        this.sortDirection=!this.sortDirection;
        if(this.sortDirection){
            return arraySort;
        }
        return arraySort.reverse();
    }
}
export {ProcessorsCollection}
