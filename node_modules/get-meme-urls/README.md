# get-meme-urls [![get-meme-urls.svg](https://travis-ci.org/akgondber/get-meme-urls.svg?branch=master)](https://travis-ci.org/akgondber/get-meme-urls)
> Get meme urls for specified query (default: `agile`).

## Usage
```js
const getMemeUrls = require('get-meme-urls');

getMemeUrls('tdd').then(result => {
  // do something with result (array of urls)
  // possible result is:
  // [
  //   // previous 5 urls
  //   'https://cdn.meme.am/cache/instances/folder387/400x/76284387.jpg',
  //   'https://cdn.meme.am/cache/instances/folder148/400x/76284148.jpg',
  //   // and next 5 urls
  // ]
}).catch(err => {
  // handle err
});
```

## API

### getMemeUrls([searchQuery][, options])

Returns a `Promise` which will be resolved with array of meme urls or rejected with an appropriate error.

#### searchQuery

Type: `string`
Default: `agile`

The search query.

#### options

##### apiKey
Type: `string`
Default: `demo`

Memegenerator [API KEY](https://memegenerator.net/api). Can be set globally with the MEMEGENERATOR_API_KEY environment variable.

##### pageIndex
Type: `number`

Page index of the requested result set. If not specified will not pass in with query and will use default value from the memegenerator's api - 0.

##### pageSize
Type: `number`

Page size of the requested result set. If not specified will not pass in with query and will use default value from the memegenerator's api - 12.

### License

MIT

