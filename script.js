let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  let title = document.querySelector('#main-title')
  title.innerText = `When you're here, you're family`

  // Part 2
  document.querySelector('body').style.backgroundColor = 'orchid'
  

  // Part 3
  const favoriteThings = document.querySelector('#favorite-things')
  favoriteThings.removeChild(favoriteThings.children[5]);
  
  // Part 4


  const specTitles = document.querySelectorAll('.special-title')
  for (i = 0; i<specTitles.length; i++) {
    specTitles[i].style.fontSize = '2rem';
  }

  

  // Part 5
  const pastRaces = document.querySelector('#past-races')
  pastRaces.removeChild(pastRaces.children[3])


  // Part 6
  const newRace = document.createElement("li");
  newRace.innerText = "Binghamton"
  document.querySelector('#past-races').appendChild(newRace)
  

  // Part 7
  
  const newPost = document.createElement('div')
  const header = document.createElement('h1')
  const blurb = document.createElement('p')
  newPost.classList.add('bingo')
  header.classList.add('town')
  newPost.classList.add('blog-post', 'purple')
  header.innerText = `Binghamton`
  blurb.innerText = `I was in a high speed chase on parade day!`
  document.querySelector('.main').appendChild(newPost)
  document.querySelector('.bingo').appendChild(header)
  document.querySelector('.town').appendChild(blurb)

}
