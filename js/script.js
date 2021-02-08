/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
{ 
quote: `We are always in transition. If you can just relax with that, you'll have no problem.`,
source: `Chogyam Trungpa`,
citation: `azquotes.com`,
year: `1977`
},
{ 
quote: `I just can't listen to any more Wagner, you know...I'm starting to get the urge to conquer Poland.`,
source: `Woody Allen`,
citation: `azquotes.com`,
year: `1977`
},
{ 
quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
source: `Nelson Mandela`,
citation: `libquotes.com`,
year: `1983`
},
{ 
quote: `The softest things in the world overcome the hardest things in the world.`,
source: `Lao-Tsu`,
citation: `Tao Te Ching`,
year: `unknown`
},
{ 
quote: `It is our mind, and that alone, that chains us or sets us free.`,
source: `Dilgo Khientse Rinpoche`,
citation: `azquotes.com`,
year: `1979`
},
{ 
quote: `Ideally the ultimate retreat is to retreat from the past and the future to always remain in the present.`,
source: `Dzongsar Jamyang Khyentse Rinpoche`,
citation: `azquotes.com`,
year: `1993`
},
{ 
quote: `One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.`,
source: `Khalil Gibran`,
citation: `azquotes.com`,
year: `1963`
}
]


/***
 * `getRandomQuote` function
***/

let selectedQuote;
let numberOfQuotes;
function getRandomQuote(quotes) {
  numberOfQuotes = quotes.length;
  selectedQuote = quotes[Math.floor(Math.random()* numberOfQuotes )]; 
  return selectedQuote;
}
/***
 * `printQuote` function
***/
let addQuote = (selectedQuote) => {
console.log(selectedQuote);
  let HTMLElement = `<p class="quote">${selectedQuote.quote}</p>
 <p class="source">${selectedQuote.source}<span class="citation">${selectedQuote.citation}</span><span class="year">${selectedQuote.year}</span></p>`;

  document.querySelector('.quote-box').innerHTML = HTMLElement;
}
function printQuote() {
  getRandomQuote(quotes);
  addQuote(selectedQuote);
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);