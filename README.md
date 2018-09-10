## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i @fabioalmeida/cpf
```

## Usage

```js
var cpf = require('@fabioalmeida/cpf')
console.log(cpf.isValid('02111606014'))

var cpfNum = cpf.generate()
console.log(cpf.isValid(cpfNum)) // result true
console.log(cpf.format(('02111606014'))) // 021.116.060-14

```
