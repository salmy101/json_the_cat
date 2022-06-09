
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=Ben', (error, response, body) => {
  // sad path
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //happy path
  const data = JSON.parse(body); //parse will take JSON as a sting and make into object!
  console.log('body:', data[0].description); //which is now an object , Access the first entry in the data array and print out the description for the user.
});

/* during error testing error: Error: getaddrinfo ENOTFOUND api.thecat345api.com
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:71:26) {
      errno: -3008,
      code: 'ENOTFOUND',  ==> means No Entity, no such place
      syscall: 'getaddrinfo',
      hostname: 'api.thecat345api.com'
}*/



