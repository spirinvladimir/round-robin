Round-robin (RR) algorithm

Usage:

1. Add package to your dependecies by:
```bash
npm i spirinvladimir/round-robin
```
2. At your project:
```js
const create_rr = require('round-robin-algorithm')
const rr = create_rr()

rr.add('red')
rr.add('green')
rr.add('blue')

console.log(rr.get(), rr.get(), rr.get(), rr.get())
// red green blue red

rr.del('green')

console.log(rr.get(), rr.get(), rr.get(), rr.get())
// red blue red blue
```
