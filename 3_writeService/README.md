## write a service

* write a `rickAndMortyApi.js` and `rickAndMortyApi.test.js` file
* export a function `getCharacter` that takes an id and returns a promise that resolves to a character
  * return only the characters name, status, and species
* **WRITE YOUR TESTS FIRST**

## write a service async/await

* refactor your `getCharacter` function to use async/await
* your tests should still pass without any edits

## write a get many service

* export a function `getManyCharacters` that takes an array of ids and returns a promise that resolves
  with an array of characters
  * use your `getCharacters` function from before with a `Promise.all`
* **WRITE YOUR TESTS FIRST**

## write a get many service with async/await

* refactor your `getManyCharacters` function to use async/await
* your tests should still pass without any edits