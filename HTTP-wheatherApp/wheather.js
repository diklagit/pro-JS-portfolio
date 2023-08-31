let weather = {
  apiKey: 'feb63bfbbe679fd1d65794f9ff061e8e',
  //fetching the API's data by city name, and displaying the chosen data parameters as we set on displayWeather function
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    //get relevant content from API data
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    //insert content to the HTML elements
    document.querySelector('.city').innerText = 'Weather in ' + name;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.humidity').innerText =
      'Humidity: ' + humidity + '%';
    document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + 'km/h';

    //as the data loads, the "Loading" display disappeared
    document.querySelector('.weather').classList.remove('loading');

    //random pictures for each chosen city
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  //   activate the fetchWeather function, which get's the city name that the client was insert, and receive's all the relevant data
  search: function () {
    this.fetchWeather(document.querySelector('.searchText').value);
  },
};

/*activate the search button, by activate the 'search' function..
'defer' allows to get the data after clicking the button*/
document.querySelector('.searchBtn').addEventListener('click', function () {
  //  another way: weather.fetchWeather(document.querySelector('.searchText').value);
  weather.search();
});

document.querySelector('.searchText').addEventListener('keyup', (event) => {
  //check if the type of the event's key is Enter
  if (event.key == 'Enter') {
    weather.search();
  }
});

weather.fetchWeather('Israel');

/*readme:
API, HTTP protocol
JSON extension
DOM
scopes
use of variables 
and parameters
call stack
operators
fetch
remove

flex
hover
transition
visibility
pseudo
after
text-transform
position
content
*/

