import calculation from './doingCalculation.js';

let calc = new calculation;


export default class Calculator {

    constructor() {
        this.btn = document.querySelectorAll('.btn')
        this.toMakeCaculation()
    }



    addEffectBtn(bt) {
        bt.classList.add('btnClicked')
    }

    removeEffectBtn(bt) {
        bt.classList.remove('btnClicked')
    }


    toMakeCaculation() {

        this.btn.forEach(bt => {
            bt.addEventListener('click', (e) => {
                this.addEffectBtn(bt)
                calc.choice(bt.id)
                setTimeout(() => {
                    this.removeEffectBtn(bt)
                }, 100)
            });

        })
    }
}
