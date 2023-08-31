const accessKey = 'odVz8tGmIzOlYokuTtFPJfnpMXMEAdAyfFPprqGhO3w';

const formO = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const imageContainer = document.querySelector('.img-container');
const showMoreButton = document.getElementById('show-more-btn');

const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');
const closeFullImg = document.getElementById('closeFullImg');

let inputData = ''; //contains the keywords from the input
let page = 1;

async function searchImages() {
  inputData = searchInput.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  //fetching the data from the api
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results; //contains all the data from the api

  //first page is empty, cause the search hasn't been started
  if (page === 1) {
    imageContainer.innerHTML = '';
  }

  //mapping the results, in order to get the data we need
  results.map((result) => {
    //creating elements, in parallel to the demo elements on the html file
    const imageBox = document.createElement('div');
    imageBox.classList.add('img-item');
    imageContainer.appendChild(imageBox);

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    imageBox.appendChild(image);

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = result.alt_description;
    imageBox.appendChild(imageLink);

    //open the full img display
    image.addEventListener('click', () => {
      showFullImg(image.src);
    });
  });

  page++;

  //if ther's more then 1 page results
  if (page > 1) {
    imageContainer.style.visibility = 'visible';
    showMoreButton.style.display = 'block';
  }
}

//activate the search input
formO.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

//activate the show-more-btn
showMoreButton.addEventListener('click', () => {
  searchImages();
});

//function for- open the full img display
function showFullImg(pic) {
  fullImgBox.style.display = 'flex';
  fullImg.src = pic;
}

//close the full img display
closeFullImg.addEventListener('click', () => {
  fullImgBox.style.display = 'none';
});

/*readme:
API, HTTP protocol
JSON extension
DOM
async function
fetch
appendChild
map
arrow function

google fonts
flex
hover
text-transform
visibility
position absolute, fixed
x-index
transition
media query
*/
