const quotes = [
    {
        quote: "There's no easy way out. If there were, I would have bought it. And believe me, it would be one of my favorite things!"
    },
    {
        quote: "Love truth, and pardon error."
    },
    {
        quote: "Male and female represent the two sides of the great radical dualism. But in fact they are perpetually passing into one another. Fluid hardens to solid, solid rushes to fluid. There is no wholly masculine man, no purely feminine woman."
    },
    {
        quote: "Do not be fooled into believing that because a man is rich he is necessarily smart. There is ample proof to the contrary."
    },
    {
        quote: "When your work speaks for itself, don't interrupt."
    },
    {
        quote: "While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior."
    },
    {
        quote: "We can learn even from our enemies."
    },
    {
        quote: "If you have a talent, use it in every which way possible. Don't hoard it. Don't dole it out like a miser. Spend it lavishly like a millionaire intent on going broke."
    },
    {
        quote: "Each individual woman's body demands to be accepted on its own terms."
    },
    {
        quote: "The highest proof of virtue is to possess boundless power without abusing it."
    }
]

const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;