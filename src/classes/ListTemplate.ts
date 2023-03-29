import { Formatter } from "../interfaces/Formatter.js";

export class ListTemplate {
    constructor(private container:HTMLUListElement){}
    render(item:Formatter,title:string,position:'start'|'end') {
        
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = title;
        li.append(h4);
        
        const p  = document.createElement('p');
        p.innerText = item.format()
        li.append(p);

        if(position == 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }

    }

}