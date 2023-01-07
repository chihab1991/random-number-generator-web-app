// number of dices
const numOfDice = document.querySelector(".number-of-dice");
// type of dice
const typeOfDice = document.getElementById("type-of-dice");
// btn dice roller
const diceRoller = document.querySelector(".btn-roll");

// my form
const myForm = document.querySelector(".my-form");
// Output the details (number) of the individual dice rolls (Possibly using a foreach loop)
const NumDiceRolled = document.querySelector(".num-of-dice-rolled");
// the type of dice (d4, d6 ..)
const diceRolledType = document.querySelector(".type-of-dice-rolled");

// the total count of the dices rolled
const totalScore = document.querySelector(".total-score");
// (number) of the individual dice rolls
const individualScore = document.querySelector(".individual-score");
// err msg
const errMsg = document.querySelector(".err-msg");
// spinner
const spinner = document.querySelector(".spinner");
// data
const imgs = [
	"../img/1.svg.png",
	"../img/2.svg.png",
	"../img/3.svg.png",
	"../img/4.svg.png",
	"../img/5.svg.png",
	"../img/6.svg.png",
	"../img/7.svg.png",
	"../img/8.svg.png",
	"../img/9.svg.png",
	"../img/10.svg.png",
	"../img/11.svg.png",
	"../img/12.svg.png",
	"../img/13.svg.png",
	"../img/14.svg.png",
	"../img/15.svg.png",
	"../img/16.svg.png",
	"../img/17.svg.png",
	"../img/18.svg.png",
	"../img/19.svg.png",
	"../img/20.svg.png",
];
//functions

function randDiceNum(diceType) {
	return Math.ceil(Math.random() * diceType);
}

function getIndividualScore() {
	let res = [];
	switch (typeOfDice.value) {
		case "d4":
			for (let index = 0; index < Number(numOfDice.value); index++) {
				res.push(randDiceNum(4));
			}
			break;
		case "d6":
			for (let index = 0; index < Number(numOfDice.value); index++) {
				res.push(randDiceNum(6));
			}
			break;
		case "d8":
			for (let index = 0; index < Number(numOfDice.value); index++) {
				res.push(randDiceNum(8));
			}
			break;
		case "d10":
			for (let index = 0; index < Number(numOfDice.value); index++) {
				res.push(randDiceNum(10));
			}
			break;
		case "d16":
			for (let index = 0; index < Number(numOfDice.value); index++) {
				res.push(randDiceNum(16));
			}
			break;
		case "d20":
			for (let index = 0; index < Number(numOfDice.value); index++) {
				res.push(randDiceNum(20));
			}
			break;
	}
	return res;
}

function getTotalScore(res) {
	return res.reduce((a, b) => a + b);
}

myForm.addEventListener("submit", (e) => {
	e.preventDefault();
	individualScore.innerHTML = "";
	NumDiceRolled.innerHTML = "";
	diceRolledType.innerHTML = "";
	totalScore.innerHTML = "";
	if (
		!Number.isInteger(Number(numOfDice.value)) ||
		Number(numOfDice.value) < 1 ||
		Number(numOfDice.value) > 20
	) {
		errMsg.style.opacity = "1";
		return;
	} else {
		errMsg.style.opacity = "0";
	}

	const spining = document.createElement("div");
	spining.classList.add("lds-dual-ring");
	spinner.appendChild(spining);
	setTimeout(() => {
		spinner.innerHTML = "";
		let result = getIndividualScore();
		NumDiceRolled.innerHTML = `Number of dice rolled is: <b>${Number(
			numOfDice.value
		)}</b>`;
		diceRolledType.innerHTML = `The type of dice rolled is: <b>${typeOfDice.value}</b>`;
		totalScore.innerHTML = `Your Total Score: <b>${getTotalScore(
			result
		)} Point</b>`;
		// individualScore
		const resultText = document.createElement("p");
		resultText.innerHTML = `You're Dices Are Rolled & The Result is:`;
		individualScore.appendChild(resultText);
		result.map((res) => {
			const img = document.createElement("img");
			img.src = imgs[res - 1];
			individualScore.appendChild(img);
		});
	}, 1000);
});
