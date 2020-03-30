export default class logo {
    constructor() {
        this.logoImg = document.querySelector('.logo')
    }

    createImage(data) {
        const image = document.createElement('img')
        image.setAttribute('src', data)
        const a = document.createElement('a')
        a.href = 'https://github.com/LuanChagas'
        a.appendChild(image)
        this.logoImg.appendChild(a)
    }
}