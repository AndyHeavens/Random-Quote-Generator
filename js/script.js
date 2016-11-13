//My array of quotes are as follows, including quote, source and catagory.
var quotes = [
  {
    quote  : "Have no fear of perfection, you'll never reach it.",
    source : 'Salvador Dali',
    catagory : 'Artist'
  },
  { quote : "Alcohol, the cause and solution for all of life's problems.",
    source : 'Homer Simpson',
    catagory : 'Father'
  },
  { quote : "You're only given one spark of madness, you musn't ever lose it.",
    source : 'Robin Williams',
    catagory : 'Comedian'
  },
  { quote : "That's the problem with the world, too many people grow up.",
    source : 'Walt Disney',
    catagory : 'Artist'
  },
  { quote : 'Of course I talk to myself, sometimes I need an expert opinion.',
    source : 'Bill Murray',
    catagory : 'Comedian & Actor'
  },
  { quote : 'Only do what your heart tells you',
    source : 'Princess Diana',
    catagory : 'Royalty'
  },
  { quote : "I am like a dog chasing cars, I wouldn't know what to do with one if I caught it",
    source : 'The Joker',
    catagory : "Batman's Nemesis"
  }
];
var chosenQuote;
var usedQuotes = [];
var rgbColour;
var red;
var blue;
var green;

// code below to automatically change the quote every 15 seconds if no click.
var intervalID = window.setInterval(printQuote, 15000);

//function to obtain random number to input into RGB
function colNum () {
 return Math.floor(Math.random() * 256 );
}

/*The getRandomQuote selects and removes a random quote from the array between 0-6, places it inside usedQuotes, and returns it.*/
function getRandomQuote() {
  if (quotes.length === 0)
    quotes = usedQuotes.splice(0,usedQuotes.length);
  var quoteNum = Math.floor(Math.random() * quotes.length);
   chosenQuote = quotes.splice(quoteNum, 1)[0];
   usedQuotes.push(chosenQuote);
   return chosenQuote;
}

//calls the getRandomQuote and random colour and prints object properties to page.
function printQuote() {
  var selQuote = getRandomQuote();
  console.log(selQuote);
  document.getElementById('quote-box').innerHTML =
  '<p class="quote">' + selQuote.quote + '</p>' +
  '<p class="source">' + selQuote.source + '</p>' +
  '<span class="citation">' + selQuote.catagory + '</span>';
  red = colNum();
  green = colNum();
  blue = colNum();
  rgbColour = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.background = rgbColour;
  }

// this code activates a new quote everytime the box is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
