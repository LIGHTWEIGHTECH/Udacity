let openCards = [];
let newCards = [];
let i = 0;
let z = 0;
let v = 0;


/* Create a list that holds all of your cards */
  const cardDatas = [
    'fa fa-diamond',
    'fa fa-paper-plane-o',
    'fa fa-anchor',
    'fa fa fa-bolt',
    'fa fa-cube',
    'fa fa-leaf',
    'fa fa-bicycle',
    'fa fa-bomb',
    'fa fa-diamond',
    'fa fa-paper-plane-o',
    'fa fa-anchor',
    'fa fa fa-bolt',
    'fa fa-cube',
    'fa fa-leaf',
    'fa fa-bicycle',
    'fa fa-bomb'
  ];

  /* Display the cards on the page */
shuffle(cardDatas);
createCardDeck();

/*   - shuffle the list of cards using the provided "shuffle" method below */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*   - loop through each card and create its HTML */
function createCardDeck() {
  const cardDeck = document.createElement('ul');
  cardDeck.setAttribute('class', 'deck');

  for (let i = 0; i < 16; i++) {
    const cardList = document.createElement('li');
    const card = document.createElement('i');
    let cardData = cardDatas[i];
    cardData.toString();
    cardList.setAttribute('class', 'card');
    cardList.appendChild(card);
    cardDeck.appendChild(cardList);
    card.setAttribute('class', cardDatas[i]);
  }

/*   - add each card's HTML to the page */
  document.body.appendChild(cardDeck);
  i = 0;
}

/* set up the event listener for a card. If a card is clicked: */
document.addEventListener('click', function() {
    if (openCards.length < 2) {
        showCards(openCards);
    } else {
        sameCards(openCards);
    }
})

/*  - display the card's symbol (put this functionality in another function that you call from this one) */
function showCards(x) {
    if (event.target.classList.contains('card')) {
        addToArray(x);
        x[i].classList.add('show', 'open');
        i++;
        movesTaken();
        if (x.length >= 2) {
            sameCards(x);
        }
    }
}

/*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) */

function addToArray(x) {
    x.push(event.target);
}

/*  - if the list already has another card, check to see if the two cards match */
function sameCards(x) {
    let firstCard = x[0].innerHTML;
    let secondCard = x[1].innerHTML;
    if (firstCard === secondCard) {
        lockCards(x);
    } else {
        setTimeout(function() {
            hideCards(x);
        }, 600);
    }
}

/*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one) */
function lockCards(x) {
    x[0].classList.add('match');
    x[1].classList.add('match');
    x.splice(0, 2);
    i = 0;
}

/*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one) */
function hideCards(x) {
    while (openCards.length > 0) {
        x[0].classList.remove('show', 'open');
        x.splice(0, 1);
        i = 0;
    }
}

/*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one) */
function movesTaken() {
    const moveCounter = document.querySelector('span');
    ++z;
    moveCounter.innerText = z;
}

/*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one) */
