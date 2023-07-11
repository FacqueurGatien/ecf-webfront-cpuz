class Processor{
    // Constructeur
    constructor(processor){
        Object.assign(this,processor)
        this.fullName = this.getFullName();
    }
    // Permet de recuperer les valeurs d'un processeur
    getValues(){
        return Object.values(this);
    }
    // Permet de construire la ligne "Nom complet" d'un processeur
    getFullName(){
        return this["brand"]+" "+this["family"]+" "+this["model"];
    }
}
export {Processor}