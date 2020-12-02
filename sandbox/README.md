## Sandbox

### Read a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.readFile` to read a file
* `then` `console.log` the file

### Write a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.writeFile` to write a file
* `then` `console.log` "DONE!"

### Copy a file

* require `const fsPromises = require('fs').promises;`
* use `fsPromises.readFile` to read a file
* `then` use `fsPromises.writeFile` to write the read data
* `then` `console.log` "DONE!"

### node-fetch

Use the Futurama Quote API [http://futuramaapi.herokuapp.com](http://futuramaapi.herokuapp.com)

* use `fetch` to make a request to http://futuramaapi.herokuapp.com/api/quotes/1
* use `then` to wait for the request to resolve and parse json
* `then` print the output
* How would you get more than 1 quote?
* How would you get only quotes by Bender?

### node-fetch Again

* use `fetch` to make a request to https://rickandmortyapi.com/api/character/
* use `then` to wait for the request to resolve and parse json
* `then` print the output

### Promise.all

* use `fetch` to make a request to https://rickandmortyapi.com/api/character/
* use `then` to wait for the request to resolve and parse json
* `then` make another request to retrieve the origin of each character
  * HINT: use `Promise.all`