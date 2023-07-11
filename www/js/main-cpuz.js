import { EventClass } from "./EventClass.js";
import { TableGenerator } from "./Processors/Generator/TableGenerator.js";
import { ProcessorsCollection } from "./Processors/ProcessorsCollection.js";

let thead = document.querySelectorAll("#thead th")

let proc = new ProcessorsCollection();
await proc.load();
EventClass.proc = proc;

let table = new TableGenerator(proc);
table.generateTable();

document.getElementById("searchField").addEventListener("input",(e)=>{
    table.generateTable(EventClass.searchArray(e.target.value));
})
addSortEvent();

function addSortEvent(){
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
        for(let th of thead){
            if(t.to==th.textContent){
                th.addEventListener("click",(e)=>{
                    table.generateTable(EventClass.sortColumn(t.from));
                })
            }
        }
    }
}