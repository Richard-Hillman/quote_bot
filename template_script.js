const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote-button');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show loading 
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// show completed hide loader
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    // picking random number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    loading();
    // check if author field is blank
    if (!quote.author) {
        quoteAuthor.textContent = 'Unknown';
    } else {
        quoteAuthor.textContent = quote.author;
    }

    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
    complete();
}

// Get quotes from API 
async function getQuotes() {
    loading();
    const apiURL = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.error('No quotes available')
    }
}

// tweet quote 
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterURL, '_blank');
}

// EVENT LISTENERS
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load get quotes
getQuotes();

