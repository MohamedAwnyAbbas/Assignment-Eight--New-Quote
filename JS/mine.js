

var newQuote = ["The fool doth think he is wise, but the wise man knows himself to be a fool. -- William Shakespeare, As You Like It" ,
"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. -- Maurice Switzer, Mrs. Goose, Her Book", 
"When someone loves you, the way they talk about you is different. You feel safe and comfortable. -- Jess C. Scott, The Intern",
"Knowing yourself is the beginning of all wisdom. -- Aristotle", "The only true wisdom is in knowing you know nothing. -- Socrates",
"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. -- Isaac Asimov",
"Hold fast to dreams,For if dreams die Life is a broken-winged bird,That cannot fly. -- Langston Hughes", "Count your age by friends, not years. Count your life by smiles, not tears. -- John Lennon",
"In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them. -- Mark Twain",
"It is the mark of an educated mind to be able to entertain a thought without accepting it. -- Aristotle, Metaphysics",
"There is neither happiness nor misery in the world; there is only the comparison of one state with another, nothing more. He who has felt the deepest grief is best able to experience supreme happiness. We must have felt what it is to die, Morrel, that we may appreciate the enjoyments of life. Live, then, and be happy, beloved children of my heart, and never forget, that until the day God will deign to reveal the future to man, all human wisdom is contained in these two words, Wait and Hope. -- Alexandre Dumas",
"Think before you speak. Read before you think. -- Fran Lebowitz, The Fran Lebowitz Reader", "Turn your wounds into wisdom. -- Oprah Winfrey",
"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to. -- J.R.R. Tolkien, The Lord of the Rings", "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. -- Rumi"];

var usedQuotes = [];

function getNewQuote() {
  if (usedQuotes.length === newQuote.length) {
    usedQuotes = [];
  }
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * newQuote.length);
  } while (usedQuotes.includes(randomIndex));

  var quote = newQuote[randomIndex];
  usedQuotes.push(randomIndex);

  document.getElementById("quote").innerHTML = quote;
}
