export default class Dropdown {
    constructor() {
        this.ul = document.querySelector('.commits-list ul');
        this.titleDrop = document.querySelector('.commits-title')
        this.img = document.querySelector('.commits-title img')
        this.li = document.querySelectorAll('.commits-list li');
        this.events = ['touchstart', 'click']

        this.dropdown()
    }

    deslize() {
        this.ul.classList.toggle('active')

        let count = 0;

        if (this.ul.classList.contains('active')) {
            this.li.forEach((e) => {
                count = count + 109;
                setTimeout(() => {
                    e.style.display = 'flex';
                    e.classList.remove('backdeslize')
                    e.classList.add('deslize')

                }, count)
            })
        } else {
            const len = this.li.length - 1
            for (let i = len; i >= 0; --i) {
                count += 100;
                setTimeout(() => {
                    this.li[i].classList.remove('deslize');
                    this.li[i].classList.add('backdeslize');
                    setTimeout(() => {
                        this.li[i].style.display = 'none';
                    }, count - 109)
                }, count)
            }
        }
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
            this.rotationImage()
            this.deslize()
        })
    }

}