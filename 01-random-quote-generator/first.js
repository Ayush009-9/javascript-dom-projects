const quotes = [
    "You have power over your mind, not outside events. — Marcus Aurelius",

    "The happiness of your life depends upon the quality of your thoughts. — Marcus Aurelius",

    "We suffer more often in imagination than in reality. — Seneca",

    "Luck is what happens when preparation meets opportunity. — Seneca",

    "No man is free who is not master of himself. — Epictetus",

    "It is not things that disturb us, but our judgments about things. — Epictetus",

    "The journey of a thousand miles begins with a single step. — Lao Tzu",

    "Knowing others is intelligence; knowing yourself is true wisdom. — Lao Tzu",

    "What we think, we become. — Buddha",

    "The only way to do great work is to love what you do. — Steve Jobs",

    "Stay hungry, stay foolish. — Steve Jobs",

    "Success is not final; failure is not fatal. — Winston Churchill",

    "The secret of getting ahead is getting started. — Mark Twain",

    "It always seems impossible until it is done. — Nelson Mandela",

    "Do what you can, with what you have, where you are. — Theodore Roosevelt",

    "Believe you can and you are halfway there. — Theodore Roosevelt",

    "The future depends on what you do today. — Mahatma Gandhi",

    "In the middle of difficulty lies opportunity. — Albert Einstein",

    "A person who never made a mistake never tried anything new. — Albert Einstein",

    "Great things are done by a series of small things brought together. — Vincent van Gogh"
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20)
    quote.textContent = quotes[index];
})