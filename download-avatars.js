var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ZBadr";
var GITHUB_TOKEN = "a3d7433b00b9ade844d4bb7e14131c3435caa0bf";

//Get contributors function
//Takes 3 parameters: Owner, Name, Callback Function


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'request'
  }
};

//
  request( options, function(err, response, body) {
    if (err) throw err;
  var dataObject = JSON.parse(body);
  cb(err, dataObject);
});

}

//Caling the function with hardcoded parameters

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);

  for (var i of result) {
    console.log(i.avatar_url);
  }








});






