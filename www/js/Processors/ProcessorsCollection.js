import { Db } from "../Db.js"
import { Processor } from "./Processor.js";

class ProcessorsCollection{
    constructor(){
        this.data=[];
        this.sortDirection=true;
    }
    async load(){
        this.data = await Db.getDb("../cpuz.json");
        this.data = this.data.map(c=>c=new Processor(c));
        this.updateActualData();
    }
    searchArray(value){
        let array =  this.data.filter(c=>c.fullName.toLowerCase().includes(value.toLowerCase()));
        this.updateActualData(array);
        return array
    }
    updateActualData(array = this.data){
        this.actualData = Array.from(array);
    }
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
