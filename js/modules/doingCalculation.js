export default class DoCalculation{
    constructor(){
        this.display = document.querySelector('.display-numbers span')


        this.show = []

    }

    showDisplay(value){
        let str = this.show.join('')
        if(str.length < 10){
            this.show.push(value)
            console.log(this.show)
            let jo = this.show.join('')
            console.log(jo)
            this.display.innerHTML = jo
        }

       
    }


    

}