// const apiKey = '';

// async function fetchPopulation() {
//   url = '';
//   const response = await fetch(url);
//   const data = await response.json();
// }

//chart1- line
const canvasOne = document.getElementById('chartOne');
const configOne = {
  type: 'line',
  data: {
    labels: ['Danny', 'Annie', 'Michael', 'John', 'Harry'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 2, 12, 19, 3],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  },
};

const chartOne = new Chart(canvasOne, configOne);

//chart2- bar
const canvasTwo = document.getElementById('chartTwo');
const configTwo = {
  type: 'bar',
  data: {
    labels: ['Danny', 'Annie', 'Michael', 'John', 'Harry'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 2, 12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
};

const chartTwo = new Chart(canvasTwo, configTwo);

//chart3-pie
const canvasThree = document.getElementById('chartThree');
configThree = {
  type: 'pie',
  data: {
    labels: ['Danny', 'Annie', 'Michael', 'John', 'Harry'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 2, 12, 19, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  },
};

const chartThree = new Chart(canvasThree, configThree);

//chart4-
const canvasFour = document.getElementById('chartFour');
const configFour = {
  type: 'doughnut',
  data: {
    labels: ['Danny', 'Annie', 'Michael', 'John', 'Harry'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 2, 12, 19, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  },
};

const chartFour = new Chart(canvasFour, configFour);

//chart5-polar area
const canvasFive = document.getElementById('chartFive');
configFive = {
  type: 'polarArea',
  data: {
    labels: ['Danny', 'Annie', 'Michael', 'John', 'Harry'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 2, 12, 19, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
    options: {},
  },
};

const chartFive = new Chart(canvasFive, configFive);

//chart6-radar
const canvasSix = document.getElementById('chart-Six');
const data = {
  labels: ['Danny', 'Annie', 'Michael', 'John', 'Harry'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [5, 2, 12, 19, 3],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
  ],
};

const configSix = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

const chartSix = new Chart(canvasSix, configSix);

/*readme:
Charts.js
Dom
objects
new Chart()
Bootstrap
*/
