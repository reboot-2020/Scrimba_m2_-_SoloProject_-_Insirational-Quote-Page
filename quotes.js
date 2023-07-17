const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot",
        image: "images/nature.jpg"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
        image: "images/johannes-plenio-unsplash.jpg"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        image: "images/sean-oulashin-unsplash.jpg"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey",
        image: "images/retrosupply-unsplash.jpg"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber",
        image: "images/aditya-chinchure-unsplash.jpg"
    }
]


let titleEl = document.getElementById("title-el")
let authorEl = document.getElementById("author-el")
let bodyEl = document.getElementById("body-el")

let randomNumber = Math.floor( Math.random() * quotes.length )

titleEl.textContent = quotes[randomNumber].quote
authorEl.textContent = "- " + quotes[randomNumber].author
bodyEl.style.backgroundImage = "url('" + quotes[randomNumber].image + "')"