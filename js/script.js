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
const quotes = [
{ 
quote: `We are always in transition. If you can just relax with that, you'll have no problem.`,
author: `Chogyam Trungpa`,
source: `azquotes.com`,
date: `1977`
},
{ 
quote: `I just can't listen to any more Wagner, you know...I'm starting to get the urge to conquer Poland.`,
author: `Woody Allen`,
source: `azquotes.com`,
date: `1977`
},
{ 
quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
author: `Nelson`,
source: `libquotes.com`,
date: `1983`
},
{ 
quote: `The softest things in the world overcome the hardest things in the world.`,
author: `Lao-Tsu`,
source: `Twitter`,
date: `unknown`
},
{ 
quote: `It is our mind, and that alone, that chains us or sets us free.`,
author: `Dilgo Khientse Rinpoche`,
source: `azquotes.com`,
date: `1979`
},
{ 
quote: `Ideally the ultimate retreat is to retreat from the past and the future to always remain in the present.`,
author: `Dzongsar Jamyang Khyentse Rinpoche`,
source: `azquotes.com`,
date: `1993`
},
{ 
quote: `One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.`,
author: `Khalil Gibran`,
source: `azquotes.com`,
date: `1963`
}
]


/***
 * `getRandomQuote` function
***/



function getRandomQuote(quotes) {

  let numberOfQuotes = quotes.length;
let selectedQuote = quotes[Math.floor(Math.random()* numberOfQuotes )]; 
console.log(selectedQuote);
return selectedQuote;
}
getRandomQuote(quotes);
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);