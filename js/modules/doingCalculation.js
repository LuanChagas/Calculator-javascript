export default class DoCalculation {
    constructor() {
        this.display = document.querySelector('.display-numbers span')

        this.oper = ["/", "*", "-", "+"]
        this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
        this.clean = "C"
        this.perc = "%"

        this.equalsCalc = "="
        this.ce = "CE"

        this.show = []
        this.cal = []
    }

    showScreen() {

        if (!this.show.length) {
            this.display.innerHTML = 0
        } else {
            this.display.innerHTML = this.show.join('')
        }
    }

    clearScreen() {
        this.display.innerHTML = 0
        this.show = []
        this.cal = []
    }

    equalsOper() {
        let hasOper = false

        this.cal.forEach(x => {
            if (this.oper.includes(x)) {
                hasOper = true
            }
        })
        return hasOper

    }

    lastIsOper() {
        let isOper = false

        this.oper.forEach(op => {
            if (this.cal[this.cal.length - 1] === op) {
                isOper = true
            }
        })
        console.log(isOper)
        return isOper
    }

    firstIsOper() {
        let isOper = false

        if (this.cal[0] === '-') {
            isOper = true
        }
        return isOper

    }

    operator(value) {
        if (this.lastIsOper()) {
            if (this.firstIsOper() && value === "+") {
                this.show.pop()
            }

            else if (this.show.length > 1) {
                this.show[this.show.length - 1] = value
                this.showScreen()
                console.log("aqui")
            }

        } else if (this.equalsOper()) {
            console.log('aqui')
            this.result()
            this.show.push(value)
            this.cal.push(value)
            console.log('show ' + this.show)
            console.log('cal ' + this.cal)
        } else if (this.cal[0]) {
            this.cal.push(value)
            this.show.push(value)
            this.showScreen()
        } else if (!this.cal[0] && value === '-') {
            this.show.push(value)
            this.cal.push(value)

        }
        console.log('show ' + this.show)
        console.log('cal ' + this.cal)
    }

    numbersChoice(value) {
        let ver = this.show.join('')
        console.log(ver)
      
        if (value) {
            console.log("aqui")
            if(ver.length <= 9){
                this.show.push(value)
                this.cal.push(value)
                this.showScreen()
                console.log(this.cal)
            }
            
        }
        
    }

    doPercent() {

        if (!this.lastIsOper()) {
            let res = eval(this.show.join(''))
            this.result()
            res =
                this.display.innerHTML = res / 100
            this.show = [res]
        }
    }


    cleanRegis() {
        this.cal.pop()
        this.show.pop()
        this.showScreen()
    }

    result() {
        let resul = eval(this.show.join(''))
        console.log(resul)
        if (resul != undefined) {
            this.cal = []
            this.cal.push(resul)
            console.log("aqui resultado")

            this.display.innerHTML = resul
            this.show = [resul]
        }
    }


    choice(value) {


     
        if (this.numbers.includes(value)) { 
            this.numbersChoice(value)
        } else if (this.clean === value) {
            this.clearScreen()
        } else if (this.oper.includes(value)) {
            this.operator(value)
        } else if (value === this.equalsCalc) {
            this.result()
        } else if (value === this.ce) {
            this.cleanRegis()
        } else if (value === this.perc) {
            this.doPercent(value)
        }
    }


}