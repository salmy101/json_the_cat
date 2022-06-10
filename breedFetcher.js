
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //sad path
    if (error) {
      return callback(error,null);
    }
    //happy path
    const data = JSON.parse(body); //parse will take JSON as a sting and make into object!
    if (callback) {
      callback(error,data[0].description);
    }
  });
};




module.exports = {fetchBreedDescription};