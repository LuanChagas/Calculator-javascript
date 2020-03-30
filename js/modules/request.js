import Commit from './commits.js'
import dateCommit from './date.js'
import Logo from './logo.js'

const commits = new Commit();
const logo = new Logo();

export default class doRequest {
    constructor() {
        this.urlCommit = 'https://api.github.com/repos/LuanChagas/Calculator-javascript/commits';
        this.urlImage = 'https://api.github.com/users/luanChagas'
        this.dataCommit = [];
        this.splash = false;

        this.data();
    }
    async makeRequestCommit() {
        try {
            let response = await (await fetch(this.urlCommit));
            let data = await (await response.json());
            return await (data);
        } catch (err) {
            return err
        }
    }

    async makeRequestImage() {
        console.log('faz splash')
        try {
            let response = await (await fetch(this.urlImage));
            let data = await (await response.json());
            return await (data.avatar_url);
        } catch (err) {
            return err
        }
    }

    async  data() {
        let dataImage = await this.makeRequestImage();
        let dataJson = await this.makeRequestCommit();
        logo.createImage(dataImage);
        for (let i = 0; i < 3; i++) {
            let data = {};
            const time = new dateCommit(dataJson[i].commit.author.date);
            data.date = `${time.getDay()}/${time.getMonth()}`;
            data.message = dataJson[i].commit.message;
            this.dataCommit.push(data);
        }
        console.log(this.dataCommit)
        await commits.creatingElement(this.dataCommit);
    }
}