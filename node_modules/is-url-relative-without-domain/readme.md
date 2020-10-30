# is-url-relative-without-domain
[![Build Status](https://travis-ci.org/Arttse/node.is-url-relative-without-domain.svg?branch=master)](https://travis-ci.org/Arttse/node.is-url-relative-without-domain)
[![Coverage Status](https://coveralls.io/repos/github/Arttse/node.is-url-relative-without-domain/badge.svg?branch=master)](https://coveralls.io/github/Arttse/node.is-url-relative-without-domain?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/arttse/node.is-url-relative-without-domain/badge.svg)](https://snyk.io/test/github/arttse/node.is-url-relative-without-domain)

> Node.js module. Checks if an URL is relative without domain


## Install

```
$ npm install is-url-relative-without-domain --save
```
or
```
$ yarn add is-url-relative-without-domain
```


## Usage

```js
var isUrlRelativeWithoutDomain = require('is-url-relative-without-domain');

isUrlRelativeWithoutDomain('/show/must?go=on');
//=> true

isUrlRelativeWithoutDomain('index.php');
//=> true

isUrlRelativeWithoutDomain('https://site.com/index.php');
//=> false

isUrlRelativeWithoutDomain('site.com/show/must?go=on');
//=> false
```


## License

MIT © Nikita «Arttse» Bystrov