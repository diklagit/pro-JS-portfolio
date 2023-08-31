const cardsContainer = document.querySelector('.cardsContainer');
const colors = [
  'blue',
  'white',
  'yellow',
  'pink',
  'green',
  'gray',
  'orange',
  'purple',
];
const allColors = [...colors, ...colors];
const numOfCards = allColors.length;

//start game:
let revealedCount = 0;

let firstCard = null;
let waitBetweenMoves = false;

function createCard(color) {
  const element = document.createElement('div');

  element.classList.add('card');
  element.setAttribute('data-color', color);
  element.setAttribute('data-revealed', 'false');

  element.addEventListener('click', () => {
    const revealed = element.getAttribute('data-revealed');
    if (waitBetweenMoves || revealed === 'true' || firstCard === element) {
      return;
    }
    element.style.backgroundColor = color;

    if (!firstCard) {
      firstCard = element;
      return;
    }

    //if there's a match
    const pairToMatch = firstCard.getAttribute('data-color');

    if (pairToMatch === color) {
      firstCard.setAttribute('data-revealed', 'true');
      element.setAttribute('data-revealed', 'true');

      waitBetweenMoves = false;
      firstCard = null;
      revealedCount += 2;

      if (revealedCount === numOfCards) {
        alert('ניצחת! רענן למשחק חדש');
      }
      return;
    }

    //if there's no match- hide the colors again
    waitBetweenMoves = true;
    setTimeout(() => {
      element.style.backgroundColor = null;
      firstCard.style.backgroundColor = null;

      waitBetweenMoves = false;
      firstCard = null;
    }, 1000);
  });

  return element;
}

//build:

for (let x = 0; x < numOfCards; x++) {
  const randomCard = Math.floor(Math.random() * allColors.length);
  const color = allColors[randomCard];
  const card = createCard(color);

  allColors.splice(randomCard, 1);
  cardsContainer.appendChild(card);
}

/*readme:
DOM
operators
spread
setAttribute
getAttribute
setTimeout
For loop
Math.random
Math.floor
splice
appendChild

flex
grid
*/
