## Transformer

* create and export a `transform(src)` function
  * require `const fsPromises = require('fs').promises;`
  * use `fsPromises.readFile` to read a file
  * `then` remove all capital letters
  * `then` make all letters capital
  * `then` reverse the string
* test
  * invoke your transform function
  * `then` expect that the result is what you think it should be