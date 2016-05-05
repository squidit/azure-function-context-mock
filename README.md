[![npm version](https://badge.fury.io/js/azure-function-context-mock.svg)](https://badge.fury.io/js/azure-function-context-mock)
[![Build Status](https://travis-ci.org/limafelipe/azure-function-context-mock.svg?branch=master)](https://travis-ci.org/limafelipe/azure-function-context-mock)

# azure-function-context-mock

> Simple object to mock context in tests when use Function App from Azure.

## Install

```
$ npm install --save-dev azure-function-context-mock
```


## Usage

This example use **Mocha** but feel free to use your favorite test framework 😄

```js
var context = require('azure-function-context-mock');

describe('my awsome tests', function () {
    it('Yes, I have a context!', function (done) {
        return myFunction(context)
            .then(done);
    });
});

```

## Context Object
#### `done` => `Promise`
Returns a `Promise` to you can know when the funcion finish in your test.

#### `log` => `void`
Execute `console.log` to facilitate yours logs outside Azure.

#### `bindings` => `Object`
Just a empty object to you can set any binding and it's not undefined.

#### `res` => `Object`
Default `res` object with status *200* and body string empty.


To more information about `context` access [Azure docs](https://azure.microsoft.com/en-us/documentation/articles/functions-reference-node/).
