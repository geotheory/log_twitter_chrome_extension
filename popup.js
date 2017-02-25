// Script to detect Twitter URL of active Chrome tab and send this together with
// any user-defined tags as a string query to a server configured to log the data

var server_url = "http://..."

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

/**
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 */

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    if(url.includes('https://twitter.com/')){
      var tags = prompt("Enter any tags relating to the tweet/tweeter, separated by commas (e.g. 'cats,dogs')", "");
      $.get(server_url + "?" + url + "&" + tags);
      $("body").append("Done");
    }
    else{
      $("body").append("Not a Twitter page");
    }
  });
});
