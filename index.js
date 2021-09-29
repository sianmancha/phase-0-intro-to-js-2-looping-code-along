//Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
};

wrapGifts(gifts);
*/

const cards = [Lisa, Kaitlin, Jan];

function writeCards(cards, event) {
    let messages = []
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);

    }
    return messages
}

writeCards(cards)


function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    };
    return int
};