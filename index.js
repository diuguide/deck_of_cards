var $container = document.getElementById('container');
let shuffle =  document.getElementById('shuffle');
let dealOne = document.getElementById('dealOne');

// create Deck
var deck = Deck();

// add to DOM
deck.mount($container);

shuffle.addEventListener('click', () => {
    deck.shuffle();
})


deck.cards.forEach(function (card, i) {
    card.setSide('back');
    card.enableDragging();
    card.enableFlipping();
    

    // // explode
    // card.animateTo({
    //     delay: 1000 + i * 2, // wait 1 second + i * 2 ms
    //     duration: 5000,
    //     ease: 'quartOut',

    //     x: Math.random() * window.innerWidth - window.innerWidth / 2,
    //     y: Math.random() * window.innerHeight - window.innerHeight / 2
    // });
});