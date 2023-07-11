class Processor{
    constructor(processor){
        Object.assign(this,processor)
        this.fullName = this.getFullName();
    }
    getValues(){
        return Object.values(this);
    }
    getFullName(){
        return this["brand"]+" "+this["family"]+" "+this["model"];
    }
}
export {Processor}