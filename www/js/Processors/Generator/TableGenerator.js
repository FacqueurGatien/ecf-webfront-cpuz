import { EventClass } from "../../EventClass.js";

class TableGenerator{
    constructor(_proc){
        this.proc = _proc;
        this.table = document.getElementById("cpuTable");
        this.tbody = document.getElementById("tbody");
        this.thead = document.querySelectorAll("#thead th")
        this.nbModel = document.getElementById("nbModel");
        this.addSortEvent();
    }
    generateTable(array=this.proc.data){
        this.actualData=array;
        this.tbody.innerHTML = "";
        array.forEach(cpu => {
            this.tbody.appendChild(this.generateRow(cpu));
        });
        this.nbModel.textContent = "Nombre de modèles : " + array.length;
    }
    generateRow(cpu){
        let tr = document.createElement("tr");
        for(let spec of cpu.getValues()){
            tr.appendChild(this.generateCell(spec));
        }
        return tr;
    }
    generateCell(spec){
        let td = document.createElement("td")
        td.textContent = spec;
        return td;
    }
    addSortEvent(){
        let translate = [
            // {from:"id",to:"Identifiant"}
            // ,{from:"brand",to:"Marque"}
            // ,{from:"family",to:"Famille"}
            // ,{from:"model",to:"Modèle"}
            // ,{from:"ghz",to:"Fréquence (Ghz)"},
            {from:"price",to:"Prix"}
            // ,{from:"fullName",to:"Nom complet"} 
        ]
        for(let t of translate){
            for(let th of this.thead){
                if(t.to==th.textContent){
                    th.addEventListener("click",(e)=>{
                        this.generateTable(EventClass.sortColumn(t.from));
                    })
                }
            }
        }
    }
}
export {TableGenerator}