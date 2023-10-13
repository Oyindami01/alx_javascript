#!/usr/bin/node
const axios = require('axios');

if (process.argv.length < 3) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

async function getMovies(url) {
  try {
    const response = await axios.get(url);
    const filmData = response.data;

    const moviesWithWedgeAntilles = filmData.results.filter((movie) => {
      return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    });

    if (filmData.next) {
      await getMovies(filmData.next);
    } else {
      console.log(moviesWithWedgeAntilles.length);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

getMovies(apiUrl);