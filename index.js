const CFonts = require('cfonts');
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const fetch = require("node-fetch");
const terminalLink = require('terminal-link');

CFonts.say('finCLI', {
	font: 'block',              // define the font face
	align: 'center',              // define text alignment
	colors: ['yellow'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: ['yellow', 'yellow'],            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});

var input = readlineSync.question("Checkout the latest headlines on: \n1. BitCoin\n2. Ethereum\n3. CryptoCurrency\n4. Global Finance\n5. Indian Finance\n6. Exit\n\nUser Input: ");

var inpKeyword = 'Bitcoin';
if (input == 1) {
	inpKeyword = 'Bitcoin';
}
else if (input == 2) {
	inpKeyword = 'Ethereum';
}
if (input == 3) {
	inpKeyword = 'CryptoCurrency';
}
if (input == 4) {
	inpKeyword = 'Finance'; // Global Finance
}
var indianNews = false;
if (input == 5) {
	indianNews = true;
}
if (input == 6) {
	var text = chalk.hex('#9370DB');
	console.log(text.italic("Created by Dhairya Ostwal. See you soon :)\n"));
	console.log(terminalLink("Click here to know more:", "http://dhairyaostwal.netlify.app/"));
	return;
}

var indianNewsURL = 'https://saurav.tech/NewsAPI/top-headlines/category/business/in.json';

const apiKey = null;
// get your APIKey from below link
var url = 'https://api.currentsapi.services/v1/search?' + 'keywords=' + inpKeyword + '&language=en&apiKey=' + apiKey;

async function getData() {
	const response = await fetch(url,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		}
	);

	const data = await response.json();
	for (let i = 0; i < 5; i++) {
		console.log(chalk.magentaBright.bold(data.news[i].author));
		console.log(chalk.yellow.bold(data.news[i].title));
		console.log(chalk.grey(terminalLink('Click to read', data.news[i].url)));
		console.log("\n");
	}

}


async function getIndianNewsData() {
	const response = await fetch(indianNewsURL,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		}
	);

	const data = await response.json();
	for (let i = 0; i < 5; i++) {
		console.log(chalk.magentaBright.bold(data.articles[i].source.name));
		console.log(chalk.yellow.bold(data.articles[i].title));
		console.log(chalk.grey(terminalLink('Click to read', data.articles[i].url)));
		console.log("\n");
	}
}

if (indianNews) {
	getIndianNewsData();
}
else {
	getData();
}
