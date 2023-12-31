#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide a URL as the first argument.');
  process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  console.log('code:', response.statusCode);
});

