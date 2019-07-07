const request = require('request');

var headers = {
  "content-type": "application/json",
  "Authorization": "Bearer " + process.env.LNKI_IO_API_KEY
}
var options = {
  uri: 'https://lnki.io',
  method: 'POST',
  headers: headers,
  json: {
    "url": "http://www.realllllllllylong.com/",
    "sms_numbers": ["5555551212"],
    "sms_message": "please visit {{url}}",
    
  }
};

request.post('https://lnki.io/link', options, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("Your URL:" + body.url);

});