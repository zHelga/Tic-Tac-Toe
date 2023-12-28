let spanStep = document.getElementById('span-step');
let gameItem = document.querySelectorAll('.game-item');
let gameArea = document.getElementById('game-area');
let spanWin = document.getElementById('span-win');
let btnRestart = document.getElementById('restart');

let step = "";
let winner = "";
let counter = 0;
let win = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

const who = () => {
	if(step == 'cross') {
		step = "circle";
		spanStep.innerText = 'O';
	} else {
		step = "cross";
		spanStep.innerText = 'X';
	}
}

who();

gameItem.forEach((item) => {
	item.addEventListener('click', () => {
		if(!item.classList.contains('cross') && !item.classList.contains('circle')) {
			item.classList.add(step);

			if(step == "cross") {
				item.innerText = "X"
			}
			if(step == "circle") {
				item.innerText = "O"
			}

			counter++;
			who();
			crossWin();
			circleWin();
			noWin();
		}
	})
})

const crossWin = () => {
	for(let i = 0; i < win.length; i++) {
		if(
			gameItem[win[i][0]].classList.contains('cross') &&
			gameItem[win[i][1]].classList.contains('cross') &&
			gameItem[win[i][2]].classList.contains('cross')
		) {
			gameItem[win[i][0]].classList.add('item-winner')
			gameItem[win[i][1]].classList.add('item-winner')
			gameItem[win[i][2]].classList.add('item-winner')

			winner = "Cross";
			endGame(winner);
			return 1;
		}
		
	}
	
}
const circleWin = () => {
	for(let i = 0; i < win.length; i++) {
		if(
			gameItem[win[i][0]].classList.contains('circle') &&
			gameItem[win[i][1]].classList.contains('circle') &&
			gameItem[win[i][2]].classList.contains('circle')
		) {
			gameItem[win[i][0]].classList.add('item-winner')
			gameItem[win[i][1]].classList.add('item-winner')
			gameItem[win[i][2]].classList.add('item-winner')

			winner = "Circle";
			endGame(winner);
			return 1;
		}

		
	}
}

const noWin = () => {
	if(!crossWin() && !circleWin() && (counter >= 9)) {
		winner = "Draw";
		endGame(winner)
	}
}

const endGame = (winner) => {
	gameArea.style.pointerEvents = 'none';
	spanWin.innerText = winner;
}

btnRestart.addEventListener('click', () => {
	document.location.reload();
})