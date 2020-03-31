export default class Dropdown {
    constructor() {
        this.ul = document.querySelector('.commits-list');
        this.titleDrop = document.querySelector('.commits-title')
        this.img = document.querySelector('.commits-title img')
        this.li = document.querySelectorAll('.commits-list li');
        this.events = ['touchstart','click']

        this.dropdown()
    }

    deslize() {
        let i = 0;
        if (this.ul.classList.contains('active')) {
            this.li.forEach((e) => {
                i = i + 109;
                setTimeout(() => {
                    e.style.display = 'flex';
                    e.classList.add('deslize')
                }, i)
            })
        } else {
            this.li.forEach((e) => {
                e.style.display = 'none';
                e.classList.remove('deslize')
            })
        }
    }

    showUl() {
        this.ul.classList.toggle('active')
    }

    rotationImage() {
        if (this.img.classList.contains('transform')) {
            this.img.classList.remove('transform')
            this.img.classList.add('back')
        } else {
            this.img.classList.remove('back')
            this.img.classList.add('transform')
        }
    }

    dropdown() {
        this.titleDrop.style.cursor = 'pointer';
        this.titleDrop.addEventListener('click', (e) => {
            console.log('passou aqui')
            this.rotationImage()
            this.showUl()
            this.deslize()
        })
    }

}