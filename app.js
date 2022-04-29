const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const moves = document.getElementById('moves');
const result = document.getElementById('result');
const resetScore = document.getElementById('reset-score-btn');
const playerScoreEl = document.getElementById('player-score');
const botScoreEl = document.getElementById('bot-score');

const PEDRA = 1;
const PAPEL = 2;
const TESOURA = 3;

let playerScore = 0;
let botScore = 0;

pedra.addEventListener('click', () => {
    playGame(PEDRA);
});

papel.addEventListener('click', () => {
    playGame(PAPEL);
});

tesoura.addEventListener('click', () => {
    playGame(TESOURA);
});

resetScore.addEventListener('click', () => {
    playerScore = 0;
    botScore = 0;
    playerScoreEl.innerHTML = playerScore;
    botScoreEl.innerHTML = botScore;
    moves.innerHTML = '';
    result.innerHTML = '';
});

function playGame(playerMove) {
    let botMove = Number(Math.floor(Math.random() * 3 + 1));

    let winner = getWinner(playerMove, botMove);
    let playerMoveLabel = getMoveLabel(playerMove);
    let botMoveLabel = getMoveLabel(botMove);

    playerScoreEl.innerHTML = playerScore;
    botScoreEl.innerHTML = botScore;
    moves.innerHTML = `${playerMoveLabel} x ${botMoveLabel}`
    result.innerHTML = winner;
}

function getWinner(playerMove, botMove) {
    if (playerMove == botMove) {
        return 'Empate!';
    }

    if (playerMove == PEDRA) {
        if (botMove == PAPEL) {
            botScore++;
            return 'Você Perdeu!';
        } else if (botMove == TESOURA) {
            playerScore++;
            return 'Você ganhou!';
        }
    }

    if (playerMove == PAPEL) {
        if (botMove == TESOURA) {
            botScore++;
            return 'Você Perdeu!';
        } else if (botMove == PEDRA) {
            playerScore++;
            return 'Você ganhou!';
        }
    }

    if (playerMove == TESOURA) {
        if (botMove == PEDRA) {
            botScore++;
            return 'Você Perdeu!';
        } else if (botMove == PAPEL) {
            playerScore++;
            return 'Você ganhou!';
        }
    }
}

function getMoveLabel(moveNumber) {
    switch (moveNumber) {
        case PEDRA:
            return 'Pedra';
        case PAPEL:
            return 'Papel';
        case TESOURA:
            return 'Tesoura'
        default:
            return;
    }
}