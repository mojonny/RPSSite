//Random Number Generator for the computer pick
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let ComputerNum = getRandomInt(3);
console.log(ComputerNum); //We should get a value of 0,1,or 2.

//  User Input will choose which function to run
//If they choose rock
function myFunctionRock() {
    document.getElementById("rock").style.transform = "scale(1.5)";
    document.getElementById("rock").style.transition = "transform 0.9s ease";
    document.getElementById("paper").style.visibility="hidden";
    document.getElementById("scissors").style.visibility="hidden";

    if (ComputerNum===0) {
    return document.getElementById("result").innerHTML = "IT'S A TIE!Chuck Norris chose rock too!";
    }
        else if (ComputerNum===1) {
        return document.getElementById("result").innerHTML = "YOU LOSE!Chuck Norris has brought shame to your family by wrapping your rock in paper!";
        }
            else {
            return document.getElementById("result").innerHTML = "YOU WIN!Rock beats Scissors!";
            }
            }
//If they choose paper
function myFunctionPaper() {
    document.getElementById("paper").style.transform = "scale(1.5)";
    document.getElementById("paper").style.transition = "transform 0.9s ease";
    document.getElementById("rock").style.visibility="hidden";
    document.getElementById("scissors").style.visibility="hidden";
    if (ComputerNum===0) {
    return document.getElementById("result").innerHTML = "YOU WIN! Your paper turned that rock to dust!";
    }
        else if (ComputerNum===1) {
        return document.getElementById("result").innerHTML = "IT'S A TIE!You two need a paper weight!";
            }
            else {
            return document.getElementById("result").innerHTML = "<em>YOU LOSE!Chop chop!Scissors slice through your paper!";
                }
                }
//If they choose scissors                   
function myFunctionScissors() {
    document.getElementById("scissors").style.transform = "scale(1.5)";
    document.getElementById("scissors").style.transition = "transform 0.9s ease";
    document.getElementById("paper").style.visibility="hidden";
    document.getElementById("rock").style.visibility="hidden";
    if (ComputerNum===0) {
    return document.getElementById("result").innerHTML = "YOU LOSE!Chuck Norris dropped a boulder on your scissors!";
    }
        else if (ComputerNum===1) {
        return document.getElementById("result").innerHTML = "YOU WIN! Your scissors sliced through Chuck's paper!";
        }
            else {
            return document.getElementById("result").innerHTML = "IT'S A TIE!Don't go running around with those scissors!";
            }
            }

//API set-up
const chuck = document.getElementById("chuck");
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'c2deec0beemsh41c6972d9945efcp1c6e98jsne710cc22d7ca',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};
//Send random joke to html
fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(data => {chuck.innerHTML = data.value})
	.catch(err => console.error(err));

//Joke categories
const cats = document.getElementById("cats");
const options1 = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'c2deec0beemsh41c6972d9945efcp1c6e98jsne710cc22d7ca',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories', options1)
	.then(response => response.json())
	.then(data => {cats.innerHTML = data})
	.catch(err => console.error(err));

//Joke Search
const chuckSearch = document.getElementById("chuckSearch");
const options2 = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'c2deec0beemsh41c6972d9945efcp1c6e98jsne710cc22d7ca',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=food', options2)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(data => {chuckSearch.innerHTML = data})
	.catch(err => console.error(err));
