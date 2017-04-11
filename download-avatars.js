var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ZBadr";
var GITHUB_TOKEN = "a3d7433b00b9ade844d4bb7e14131c3435caa0bf";

//Get contributors function
//Takes 3 parameters: Owner, Name, Callback Function


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
  url: requestURL,
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

// Function downloads image and creates name for it

function downloadImageByURL(url, filePath) {
  var fileName = './' + filePath + '.jpeg';

  request.get(url)
       .on('error', function (err) {
         throw err;
       })
      .pipe(fs.createWriteStream(fileName));

}
//Caling the function with hardcoded parameters

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);


// Loop gets url and login to be used to download image and give it unique name (login info)

  for(i of result) {
    downloadImageByURL(i.avatar_url, i.login);
  }

});









