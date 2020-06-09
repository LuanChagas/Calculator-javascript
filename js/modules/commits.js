export default class Commits {
    constructor(){ 
       this.dad = document.querySelector('ul');
   }

   createLi(){
       return document.createElement('li');
   }

  creatingElement(data){
        for(let i = 0;i < data.length; i++){
            let li = this.createLi();
            let h3 = document.createElement('h3');
            let span = document.createElement('span');
            h3.innerHTML= `${data[i].message}`
            span.innerHTML = `${data[i].date} `
            li.appendChild(span)
            li.appendChild(h3)
            this.dad.appendChild(li);
        } 
   } 
}