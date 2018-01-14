var quotes = [
  'I love you the more in that I believe you had liked me for my own sake and for nothing else. - John Keats',
  'But man is not made for defeat. A man can be destroyed but not defeated. - Ernest Hemingway', 
  'When you reach the end of your rope, tie a knot in it and hang on. - Franklin Delano Roosevelt',
  'There is nothing permanent except change. - Heraclitus',
  'You cannot shake hands with a clenched fist. - Indira Gandhi', 
 'Let us sacrifice our today so that our children can have a better tomorrow. - APJ Abdul Kalam',
  'It is better to be feared than loved, if you cannot be both. - Niccolo Machiavelli',
  'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward. - Amelia Earhart',
  'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. - Henry James',
  'Learning never exhausts the mind.- Leonardo Da Vinci',
  'There is no charm equal to tenderness of heart. - Jane Austen',
  'All that we see or seem is but a dream within a dream.- Edgar Allan Poe'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length)
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

$(document).ready(function() {
  $("#tweet-quote").click(function(e) {
    var textToTweet = quotes[randomNumber];
    if (textToTweet.length > 140) {
 alert('Tweet should be less than 140 Chars');
 }
 else {
 var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
 window.open(twtLink,'_blank');
 }
  })
})
  
}
