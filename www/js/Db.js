class Db{
    // Permet convertir et renvoyer un Json en collection de donnée
    static async getDb(link){
        let response = await fetch(link);
        let json = await response.json();
        return await json;
    }
}
export {Db}