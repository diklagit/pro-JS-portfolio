import { Invoice } from './invoice.js';
import { Payment } from './payment.js';
import { ListStructure } from './listStructure.js';
const form = document.querySelector('.form-a');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// const removeBtn = document.querySelector('.removeBtn') as HTMLButtonElement;
const ul = document.querySelector('ul');
const list = new ListStructure(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    //check the type and create new one which contains the needed values
    if (type.value === 'קבלה') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    //set the ListStructure class (item/p, heading/h4, pos)
    list.render(doc, type.value, 'end');
    //?
    // removeBtn.style.visibility = 'visible';
});
// localStorage.setItem('type', 'invoice|payment');
// //getItem
// localStorage.removeItem('type');
// localStorage.clear();
/*readme:
typescript
Dom
modules

class, constructor, interface, implements
as
public, private, readonly
preventDefault()
createElement()
prepend()append()
*/
