import { Invoice } from './invoice.js';
import { Payment } from './payment.js';
import { HasFormatter } from './formatInterface.js';
import { ListStructure } from './listStructure.js';

const form = document.querySelector('.form-a') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// const removeBtn = document.querySelector('.removeBtn') as HTMLButtonElement;

const ul = document.querySelector('ul')!;
const list = new ListStructure(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  //check the type and create new one which contains the needed values
  if (type.value === 'קבלה') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
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


