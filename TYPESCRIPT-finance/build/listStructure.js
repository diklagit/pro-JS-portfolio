export class ListStructure {
    container;
    constructor(container) {
        this.container = container;
    } //to insert the ul, which will receives all the li's
    //rendering the li
    render(item, heading, pos) {
        const li = document.createElement('li'); //create li
        //creating the li's: p, h4 and adding them to the li
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        //add the li from the beginning or the bottom of the list
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
