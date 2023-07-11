class TableGenerator{
    // Constructeur
    constructor(_proc){
        this.proc = _proc;
        this.table = document.getElementById("cpuTable");
        this.tbody = document.getElementById("tbody");
        this.nbModel = document.getElementById("nbModel");
    }
    // Generation du tableau
    // Ppurge du tableau actuel pour ne pas avoir de duplication
    // (Re)Generation du tableau et Mise a jour du nombre de modele de processeur
    generateTable(array=this.proc.data){
        this.tbody.innerHTML = "";
        array.forEach(cpu => {
            this.tbody.appendChild(this.generateRow(cpu));
        });
        this.nbModel.textContent = "Nombre de modèles : " + array.length;
    }
    // Permet de generer et renvoyer une ligne et d'y ajouter des cellules
    generateRow(cpu){
        let tr = document.createElement("tr");
        for(let spec of cpu.getValues()){
            tr.appendChild(this.generateCell(spec));
        }
        return tr;
    }
    // Permet de generer et renvoyer une cellule et d'y ajouter un contenue
    generateCell(spec){
        let td = document.createElement("td")
        td.textContent = spec;
        return td;
    }
}
export {TableGenerator}