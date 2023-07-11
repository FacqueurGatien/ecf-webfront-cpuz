import { EventClass } from "./EventClass.js";
import { TableGenerator } from "./Processors/Generator/TableGenerator.js";
import { ProcessorsCollection } from "./Processors/ProcessorsCollection.js";

let proc = new ProcessorsCollection();
await proc.load();
EventClass.proc = proc;

let table = new TableGenerator(proc);
table.generateTable();

document.getElementById("searchField").addEventListener("input",(e)=>{
    table.generateTable(EventClass.searchArray(e.target.value));
})
