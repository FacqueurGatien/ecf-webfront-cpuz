import { EventClass } from "../../EventClass.js";

class TableGenerator{
    constructor(_proc){
        this.proc = _proc;
        this.table = document.getElementById("cpuTable");
        this.tbody = document.getElementById("tbody");
        this.nbModel = document.getElementById("nbModel");
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
}
export {TableGenerator}