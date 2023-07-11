import { EventClass } from "./EventClass.js";
import { TableGenerator } from "./Processors/Generator/TableGenerator.js";
import { ProcessorsCollection } from "./Processors/ProcessorsCollection.js";

// Recuperation de toute les entetes du thead
let thead = document.querySelectorAll("#thead th")

// Declaration d'une instance de ProessorsCollection
let proc = new ProcessorsCollection();
// Chargement de la collection de processeur
await proc.load();
// Attribution de l'instance de ProcessorsCollection dans la class EventClass
EventClass.proc = proc;

// Declaration d'une instance de TableGenerator
let table = new TableGenerator(proc);
// Generation du tableau (la partie "tbody")
table.generateTable();

// Ajout de l'evenement de recherche du tableau (main > EventClass > ProcessorsCollection)
document.getElementById("searchField").addEventListener("input",(e)=>{
    table.generateTable(EventClass.searchArray(e.target.value));
})
// Apelle de la fonction d'ajout des evenement de trie des colonne;
addSortEvent();

// Ajout des evenement de trie des collones (main > EventClass > ProcessorsCollection)
function addSortEvent(){
    // Decommenter les ligne du dessous pour ajouter le trie à toute les colonne;
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