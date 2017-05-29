$(document).ready(function() {
  getQuote();
  $('new-quote').on('click', getQuote);
  $('tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  $('tumblr-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    }
  });
});

// This func checks whether active window is in an iFrame. If It's not in an iFrame then it pops open a new window to handle the Twitter/Tumblr sharing without completely redirecting the page.
function inIframe () {
  try { return window.self !== window.top }
  catch (e) { return true; }
}

  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
  var currentQuote = '';
  var currentAuthor = '';
