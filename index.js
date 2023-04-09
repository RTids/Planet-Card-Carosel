const key = 'tPhWDh1X8JsV/nKonCZKrQ==Fxit4HT5YBEH45d3';
const loader = document.getElementById('loading');
const distanceInput = document.getElementById('distanceLabel');
let distanceSliderValue = document.getElementById('distanceSlider');

const options = {
	method: 'GET',
	headers: { 'X-Api-Key': key },
	contentType: 'application/json',
};

let distance = distanceInput.value;
let currentCount = 0;
let arrayLength = null

function displayLoader() {
	loader.classList.add('display');
	setTimeout(() => {
		loader.classList.remove('display');
	}, 2000);
}

function hideLoader() {
	loader.classList.remove('display');
}

function updateDistanceLabel(inputValue) {
	distanceSliderValue.value = inputValue;
	distance = inputValue;
	url = `https://api.api-ninjas.com/v1/planets?max_distance_light_year=${distance}&min_distance_light_year=${
		distance - 10
	}`;
	currentCount = 0;
	getHTML();
}

let url = `https://api.api-ninjas.com/v1/planets?max_distance_light_year=${distance}&min_distance_light_year=${
	distance - 10
}`;

const getHTML = () => {
	document.getElementById('wrapper-bio').innerHTML = ``;

	displayLoader();

	fetch(url, options)
		.then((resp) => resp.json())
		.then((data) => {
			let planet = data[currentCount];

            arrayLength = data.length

			document.getElementById('wrapper-bio').innerHTML = `
                <h1>${planet.name}</h1>
                <p>Distance from Earth: ${planet.distance_light_year}</p>
                <p>Mass: ${planet.mass} Jupiters</p>
                <p>Days in a year: ${planet.period} days</p>
                <p>Surface Temperature: ${planet.temperature} Kelvin</p>
        `;
			hideLoader();
		});
};

document
	.getElementById('previous-planet')
	.addEventListener('click', function () {
		currentCount > 1 ? (currentCount -= 1) : (currentCount = 0);
		getHTML();
	});

document.getElementById('next-planet').addEventListener('click', function () {
	currentCount < arrayLength - 1 ? (currentCount += 1) : (currentCount += 0);
	getHTML();
});

getHTML();
