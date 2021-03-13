const CFonts = require('cfonts');
const readlineSync = require('readline-sync');

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

var input = readlineSync.question("Checkout the latest headlines on: \n1. BitCoin\n2. Ethereum\n3. CryptoCurrency\nUser Input: ");

var inpKeyword;
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
	inpKeyword = 'Global Finance';
}
if (input == 5) {
	inpKeyword = 'Indian Finance';
}

var url = 'https://api.currentsapi.services/v1/search?'+'keywords='+inpKeyword+'&language=en&apiKey=';

// var url = 'https://api.currentsapi.services/v1/latest-news?' +
// 'language=us&' +
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
// 		console.log(response.json());
// })
