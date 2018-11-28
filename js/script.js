/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

var quotes = [
  {
    "quote": "A champion is defined not by their wins but by how they can recover when they fall.",
    "source": "Serena Williams",
    "citation": "The National",
    "year": "2012"
  },
  {
    "quote": "Let us make our future now, and let us make our dreams tomorrow's reality.",
    "source": "Malala Yousafzai"
  },
  {
    "quote": "You must do the things you think you cannot do.",
    "source": "Eleanor Roosevelt"
  },
  {
    "quote": "Nothing is impossible. The word itself says \"I'm possible!\"",
    "source": "Audrey Hepburn"
  },
  {
    "quote": "Happiness is not by chance, but by choice.",
    "source": "Jim Rohn"
  },
  {
    "quote": "Don't wait. The time will never be just right.",
    "source": "Napoleon Hill"
  },
]


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(){
  return quotes[Math.floor(Math.random()*quotes.length)];
}


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote(){
  var quote = getRandomQuote();
  console.log(quote);
  var quote_box = document.getElementById("quote-box");
  var quote_html = quote_box.getElementsByClassName("quote")[0];
  var source_html = quote_box.getElementsByClassName("source")[0];
  var source = quote.source;
  if(quote.citation != undefined) {
    source += '<span class="citation">' + quote.citation +'</span>';
  }
  if(quote.year != undefined) {
    source += '<span class="year">' + quote.year + '</span>';
  }
  quote_html.innerHTML = quote.quote;
  source_html.innerHTML = source;
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// Remember to delete the comments that came with this file, and replace them with your own code comments.
