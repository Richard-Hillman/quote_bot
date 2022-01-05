let apiQuotes = []
function newQuote() {
    // picking random number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}
// Get quotes from API 
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
    }
}

// on load get quotes
getQuotes();
