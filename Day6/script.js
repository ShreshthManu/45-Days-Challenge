const loader = document.querySelector(".loader");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const category = document.querySelector(".category");
const btn = document.querySelector(".fetch");
const whatsapp = document.querySelector("#whatsappBtn");
const twitter = document.getElementById("shareTwitter");
const Ln = document.getElementById("shareLinkedIn");
const copyBtn = document.getElementById("copyBtn");

const seenQuotes = new Set();
const CACHE_LIMIT = 5;

// Local dummy quotes fallback
const dummyQuotes = [
    { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { content: "You learn more from failure than from success. Don’t let it stop you.", author: "Unknown" },
    { content: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { content: "If you are working on something exciting, it will keep you motivated.", author: "Unknown" },
    { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { content: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { content: "Dream bigger. Do bigger.", author: "Unknown" },
    { content: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { content: "Great things never come from comfort zones.", author: "Unknown" }
];

let currentQuote = {}; // store currently displayed quote

async function fetchApi() {
    const cat = category.value;

    loader.style.display = "flex";
    quote.textContent = "";
    author.textContent = "";

    try {
        let data;
        let tries = 0;

        do {
            const endpoint = cat
                ? `https://api.quotable.io/quotes/random?tags=${encodeURIComponent(cat)}`
                : "https://api.quotable.io/quotes/random";

            const res = await fetch(endpoint, { cache: "no-store" });
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

            const arr = await res.json();
            data = Array.isArray(arr) ? arr[0] : arr;
            tries++;
        } while (data._id && seenQuotes.has(data._id) && tries < 5);

        if (data._id) {
            seenQuotes.add(data._id);
            if (seenQuotes.size > CACHE_LIMIT) {
                const first = seenQuotes.values().next().value;
                seenQuotes.delete(first);
            }
        }

        currentQuote = data._id ? { content: data.content, author: data.author } : showDummyQuote();
        quote.textContent = `"${currentQuote.content}"`;
        author.textContent = `~${currentQuote.author}`;
    } catch (err) {
        console.warn("API failed, using dummy quotes:", err);
        currentQuote = showDummyQuote();
        quote.textContent = `"${currentQuote.content}"`;
        author.textContent = `~${currentQuote.author}`;
    } finally {
        loader.style.display = "none";
    }
}

function showDummyQuote() {
    const randomQuote = dummyQuotes[Math.floor(Math.random() * dummyQuotes.length)];
    return { content: randomQuote.content, author: randomQuote.author };
}

function updateShareLinks(quoteData) {
    const text = encodeURIComponent(`"${quoteData.content}" ~${quoteData.author}`);

    whatsapp.onclick = () => window.open(`https://wa.me/?text=${text}`, "_blank");
    twitter.onclick = () => window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
    Ln.onclick = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${text}`, "_blank");

    copyBtn.onclick = async () => {
        try {
            await navigator.clipboard.writeText(`"${quoteData.content}" ~${quoteData.author}`);
            alert("Quote copied to clipboard!");
        } catch (err) {
            alert("Failed to copy quote.");
            console.error(err);
        }
    };
}

// Event listeners
btn.addEventListener("click", () => fetchApi().then(() => updateShareLinks(currentQuote)));

window.addEventListener("DOMContentLoaded", () => fetchApi().then(() => updateShareLinks(currentQuote)));



// function fetchApi() {
//     loader.style.display = "flex";
//     let cat = category.value; // dropdown value
//     const endpoint = cat
//         ? `https://api.quotable.io/quotes/random?tags=${encodeURIComponent(cat)}`
//         : "https://api.quotable.io/quotes/random";

//     fetch(endpoint)
//         .then(res => {
//             if (!res.ok) throw new Error("Network response not found");
//             return res.json();
//         })
//         .then(data => {
//             loader.style.display = "none";
//             // Check if data exists
//             if (data && data.content) {
//                 quote.innerText = data.content;
//                 author.innerText = `~${data.author}`;
//             } else {
//                 // Use a random dummy quote if API returns nothing
//                 const dummy = dummyQuotes[Math.floor(Math.random() * dummyQuotes.length)];
//                 quote.innerText = dummy.content;
//                 author.innerText = `~${dummy.author}`;
//             }
//         })
//         .catch(err => {
//             loader.style.display = "none";
//             console.error(err);
//             // Use a random dummy quote on fetch error
//             const dummy = dummyQuotes[Math.floor(Math.random() * dummyQuotes.length)];
//             quote.innerText = dummy.content;
//             author.innerText = `~${dummy.author}`;
//         });
// }
