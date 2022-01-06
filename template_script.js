const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote-button');

let apiQuotes = [];

function newQuote() {
    // picking random number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteAuthor.textContent = quote.author;
    quoteText.textContent = quote.text;
}
// Get quotes from API 
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.error('no quotes available')
    }
}

// on load get quotes
getQuotes();
