var arrayOfQuotes = [

    { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated." },
    { author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
    { author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { author: "Henry David Thoreau", quote: "Go confidently in the direction of your dreams. Live the life you have imagined." },
    { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { author: "Mark Twain", quote: "The secret of getting ahead is getting started." },
    { author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
    { author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
    { author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." },
    { author: "Mahatma Gandhi", quote: "You must be the change you wish to see in the world." },
    { author: "Benjamin Franklin", quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn." },
    { author: "John Lennon", quote: "Life is what happens when you're busy making other plans." },
    { author: "Friedrich Nietzsche", quote: "That which does not kill us makes us stronger." },
    { author: "Anne Frank", quote: "Whoever is happy will make others happy too." },
    { author: "J.K. Rowling", quote: "It is our choices that show what we truly are, far more than our abilities." },
    { author: "Lao Tzu", quote: "The journey of a thousand miles begins with one step." },
    { author: "Aristotle", quote: "It is during our darkest moments that we must focus to see the light." },
    { author: "Helen Keller", quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." },
    { author: "Theodore Roosevelt", quote: "Do what you can, with what you have, where you are." },
    { author: "Mother Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier." },
    { author: "Winston Churchill", quote: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
    { author: "Leonardo da Vinci", quote: "Simplicity is the ultimate sophistication." },
    { author: "Vince Lombardi", quote: "The only place success comes before work is in the dictionary." },
    { author: "Dalai Lama", quote: "Happiness is not something ready-made. It comes from your own actions." },
    { author: "Ralph Waldo Emerson", quote: "Do not go where the path may lead, go instead where there is no path and leave a trail." },
    { author: "Bruce Lee", quote: "The successful warrior is the average man, with laser-like focus." },
    { author: "Charles Dickens", quote: "No one is useless in this world who lightens the burdens of another." },
    { author: "Plato", quote: "Courage is knowing what not to fear." },
    { author: "Abraham Lincoln", quote: "In the end, it's not the years in your life that count. It's the life in your years." }

];


function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}


function generateQuote(){

    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById('qouteOutput').innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';

    document.getElementById('authorOutput').innerHTML = '- ' + arrayOfQuotes[randomNumber].author + '"'

}
