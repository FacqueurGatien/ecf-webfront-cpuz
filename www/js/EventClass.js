class EventClass{
    // Instance de processorsCollection (à Initialiser depuis le main)
    static proc;

    // Permet d'appeler la focntion searchArray dans l'instance de processorsCollection
    static searchArray(value){
        return EventClass.proc.searchArray(value);
    }
    // Permet d'appeler la focntion sortColumn dans l'instance de processorsCollection
    static sortColumn(title){
        return EventClass.proc.sortColumn(title);
    }
}
export {EventClass}