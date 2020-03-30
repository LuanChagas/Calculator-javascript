export default class dateCommit{

    constructor(date){
        this.date = Date.parse(date);
        this.date = new Date(this.date)
    }

    getDay(){
        return this.date.getDate() 

    }
    getMonth(){
        return this.date.getMonth() 
    }
}