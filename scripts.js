var quoteList = [{
    text: "Modern mass culture, aimed at the 'consumer', the civilisation of prosthetics, is crippling people's souls, setting up barriers between man and the crucial questions of his existence, his consciousness of himself as a spiritual being.",
    author: 'andrei tarkovsky',
    authorURL: 'https://en.wikipedia.org/wiki/Andrei_Tarkovsky',
    source: 'sculpting in time',
    sourceURL: 'https://www.amazon.com/Sculpting-Time-Tarkovsky-Filmaker-Discusses/dp/0292776241',
    backgroundURL: 'img/nostalghia.png'
  }, //sculpting in time (nostalghia still)
  {
    text: "I had the greatest difficulty in explaining to people that there is no hidden, coded meaning in the film, nothing beyond the desire to tell the truth. Often my assurances provoked incredulity and even disappointment. Some people evidently wanted more: they needed arcane symbols, secret meanings. They were not accustomed to the poetics of the cinema image.",
    author: 'andrei tarkovsky',
    authorURL: 'https://en.wikipedia.org/wiki/Andrei_Tarkovsky',
    source: 'on his film the mirror, 1975',
    sourceURL: 'http://www.imdb.com/title/tt0072443/',
    backgroundURL: 'img/mirror.jpg'
  }, // (on) the mirror
  {
    text: "Where am I when I'm not in reality or in my imagination? Here's my new pact to the world: it must be sunny at night and snowy at August. Great things end, small things endure. Society must become united again instead of so disjointed....What kind of world is this if a madman tells you must be ashamed of yourselves?",
    author: 'andrei tarkovsky',
    authorURL: 'https://en.wikipedia.org/wiki/Andrei_Tarkovsky',
    source: 'nostalghia, 1983',
    sourceURL: 'http://www.imdb.com/title/tt0086022/?ref_=ttqt_qt_tt',
    backgroundURL: 'img/nostalghia.jpg'
  }, // nostalghia
  {
    text: "Whenever we show pity, we empty our souls.",
    author: 'andrei tarkovsky',
    authorURL: 'https://en.wikipedia.org/wiki/Andrei_Tarkovsky',
    source: 'solaris, 1972',
    sourceURL: 'http://www.imdb.com/title/tt0069293/?ref_=ttqt_qt_tt',
    backgroundURL: 'img/solaris.jpg'
  }, // solaris
  {
    text: "The world is a den of thieves and night is falling. Evil breaks its chains and runs through the world like a mad dog.",
    author: 'ingmar bergman',
    authorURL: 'https://en.wikipedia.org/wiki/Ingmar_Bergman',
    source: 'fanny and alexander, 1982',
    sourceURL: 'http://www.imdb.com/title/tt0083922/',
    backgroundURL: 'img/fannyalex.jpg'
  }, // fanny and alexander
  {
    text: "You know how people are. You tell them something, they start talking.",
    author: 'terrence malick',
    authorURL: 'https://en.wikipedia.org/wiki/Terrence_Malick',
    source: 'days of heaven, 1978',
    sourceURL: 'http://www.imdb.com/title/tt0077405/',
    backgroundURL: 'img/daysofheaven.jpg'
  }, // days of heaven
  {
    text: "The television screen is the retina of the mind's eye. Therefore the television screen is part of the physical structure of the brain. Therefore whatever appears on the television screen emerges as raw experience for those who watch it. Therefore television is reality, and reality is less than television.",
    author: 'david cronenberg',
    authorURL: 'https://en.wikipedia.org/wiki/David_Cronenberg',
    source: 'videodrome, 1983',
    sourceURL: 'http://www.imdb.com/title/tt0086541/',
    backgroundURL: 'img/videodrome.jpg'
  }, // videodrome
  {
    text: "Well, you see, Willard, in this war, things get confused out there. Power, ideals, the old morality, and practical military necessity. But out there with these natives, it must be a temptation to be God. Because there's a conflict in every human heart, between the rational and irration, between good and evil. And good does not always triumph. Sometimes, the dark side overcomes what Lincoln called the better angels of our nature.",
    author: 'francis ford coppola',
    authorURL: 'https://en.wikipedia.org/wiki/Francis_Ford_Coppola',
    source: 'apocalypse now, 1979',
    sourceURL: 'http://www.imdb.com/title/tt0078788/',
    backgroundURL: 'img/apocalypse.jpg'
  }, // apocalypse now
  {
    text: "The days go on and on... they don't end. All my life needed was a sense of someplace to go. I don't believe that one should devote his life to morbid self-attention, I believe that one should become a person like other people.",
    author: 'martin scorsese',
    authorURL: 'https://en.wikipedia.org/wiki/Martin_Scorsese',
    source: 'taxi driver, 1976',
    sourceURL: 'http://www.imdb.com/title/tt0075314/',
    backgroundURL: 'img/taxi.png'
  } // taxi driver
];

function quoteGeneration() {
  var randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  document.getElementById("quote-text").innerHTML = randomQuote.text;
  document.getElementById("quote-author").innerHTML = "<a href='" + randomQuote.authorURL + "' target='_blank'/>" + randomQuote.author + "</a>";
  document.getElementById("quote-source").innerHTML = "<a href='" + randomQuote.sourceURL + "' target='_blank'/>" + randomQuote.source + "</a>";
      document.getElementsByTagName("body")[0].style.backgroundImage = "url(" + randomQuote.backgroundURL + ")";
}


/* TWEET */

function tweetIt() {
  var phrase = document.getElementById('quote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase);
  window.open(tweetUrl);
}
