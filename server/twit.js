var OAuth = require('oauth');
var async = require('async');
var Twitter = require('twitter');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'IjrUmSUyDOioTWvp52WCzVXdR',
  'arho6tqPslw5gyszyvlhnJ6uOGuRmaM43kJ9H6BzJ32qstf7Uz',
  '1.0A',
  null,
  'HMAC-SHA1'
);


server.get('/twitter', function(request, response, next) {
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?count=1&result_type=recent&q=' + request.query.word,
    '12613832-DLUVjyGswhcoe73ezsJeUiNGtoPonTWbWkieaboof',
    //you can get it at dev.twitter.com for your own apps
    '5Qj1oCiT3XMG9fqZfTi39lAA6o4fg0SEiIUaHMVKOxpLJ',
    //you can get it at dev.twitter.com for your own apps
    function(e, data, res) {
      var JSparse = JSON.parse(data);

      response.json(JSparse);
    });
});



server.get('/updateJNAJE', function(request, response, next) {
  async.map(words, function(item) {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?count=10&result_type=recent&q=' + encodeURI(item.word),
      '12613832-DLUVjyGswhcoe73ezsJeUiNGtoPonTWbWkieaboof',
      '5Qj1oCiT3XMG9fqZfTi39lAA6o4fg0SEiIUaHMVKOxpLJ',
      function(e, data, res) {
        try {
          var JSparse = JSON.parse(data);
          if (0 < JSparse.statuses.length) {
            item["twitt"] = [];
            for (var i = JSparse.statuses.length - 1; i >= 0; i--) {
              item["twitt"].push(JSparse.statuses[i].id_str);
            }
          } else {
            if (!item["twitt"])
              item["twitt"] = false;
          }
          console.log(item);
        } catch (err) {
          console.log(err, data);
        }
        return item;
      });
  }, function(err, results) {
  });
   response.json({ success: true });
});

server.get('/jnaje.json', function(request, response, next) {
  response.json(words);
});


var words = [{
  "word": "farouche",
  "position": 29
}, {
  "word": "maudite",
  "position": 32.28
}, {
  "word": "amère",
  "position": 35.75
}, {
  "word": "défunte",
  "position": 39
}, {
  "word": "potiche",
  "position": 42.48
}, {
  "word": "Amish ",
  "position": 45.69
}, {
  "word": "célèbre ",
  "position": 49.25
}, {
  "word": "adulée",
  "position": 52.49
}, {
  "word": "sous les bombes",
  "position": 55.92
}, {
  "word": "sur les nerfs",
  "position": 59.25
}, {
  "word": "SDF",
  "position": 62.6
}, {
  "word": "VIP",
  "position": 66.1
}, {
  "word": "droguée",
  "position": 110
}, {
  "word": "obèse",
  "position": 113.6
}, {
  "word": "handicapée",
  "position": 116.87
}, {
  "word": "imposable",
  "position": 120
}, {
  "word": "sous pression",
  "position": 124
}, {
  "word": "sûre de moi",
  "position": 127.1
}, {
  "word": "clonée",
  "position": 130.29
}, {
  "word": "otage ",
  "position": 133.62
}, {
  "word": "chef de bande",
  "position": 137
}, {
  "word": "mariée",
  "position": 140.32
}, {
  "word": "violée",
  "position": 143.88
}, {
  "word": "mère porteuse",
  "position": 147.1
}, {
  "word": "dans le Gers ",
  "position": 164.14
}, {
  "word": "à Las Végas",
  "position": 167.54
}, {
  "word": "camionneuse",
  "position": 170.68
}, {
  "word": "bouc émissaire",
  "position": 174.11
}, {
  "word": "je m’enfoutiste",
  "position": 177.38
}, {
  "word": "pentecôtiste",
  "position": 180
}, {
  "word": "maire d’un petit village",
  "position": 184.3
}, {
  "word": "dans un casino Partouche",
  "position": 187.7
}, {
  "word": "dans mon assiette",
  "position": 191
}, {
  "word": "collectionneuse de souvenirs",
  "position": 194.42
}, {
  "word": "végétarienne",
  "position": 197.9
}, {
  "word": "si près du but",
  "position": 201.1
}];
