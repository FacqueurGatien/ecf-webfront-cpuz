class Db{
    static async getDb(link){
        let response = await fetch(link);
        let json = await response.json();
        return await json;
    }
}
export {Db}