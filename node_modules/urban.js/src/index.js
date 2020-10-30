const fetch = require('snekfetch');
const Definition = require('./Definition');
const { BASE_URL, ran } = require('./Constants');

const random = () => new fetch('GET', `${BASE_URL}/random`)
  .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));

/**
 * Gets first definition by thumbs up count from 1 page.
 *
 * NOTE: first is exported as main function for package
 * @method first
 * @param  {string} query Query search for in urban.
 * @returns {Promise<Definition>} Returns Definition
 * @example
 * const urban = require('urban.js');
 *
 * urban('hello').then(console.log);
 */
function first(query) {
  return Urban.search(query)
    .then((body) => new Definition(body.list[0], body));
}

const Urban = {
  Definition,
  version: require('../package.json').version,

  /**
 * Gets random definition from urban by query or not
 *
 * NOTE: `random()` method doesn't have tags and sounds
 * @method random
 * @param  {string} [query=null] Get random definition by specific query
 * @returns {Promise<Definition>} Returns random Definition
 * @example
 * const { random } = require('urban.js');
 *
 * random('hello').then(console.log);
 * random().then(console.log);
 */
  random(query = null) {
    if (!query) {
      return random()
        .then((body) => new Definition(body.list[0], body));
    } else {
      return Urban.search(query)
        .then((body) => new Definition(ran(body.list), body));
    }
  },

  /**
   * Gets first definition by (thumbs up count - thumbs down) from given page.
   *
   * @method top
   * @param  {string} query Query search for in urban.
   * @param {string} [page=1] Page to resolve in top definition
   * @returns {Promise<Definition>} Returns Definition
   * @example
   * const { top } = require('urban.js');
   *
   * top('hello').then(console.log);
   */
  top(query, page) {
    return Urban.all(query, page)
      .then((list) => list.sort((a, b) => (b.thumbsUp - b.thumbsDown) - (a.thumbsUp - a.thumbsDown))[0]);
  },

  /**
 * Fetches Urban Definition by ID
 * @method fetch
 * @param  {string} id ID of definition
 * @returns {Promise<Definition>} Returns fetched Definition
 * @example
 * const urban = require('urban.js');
 *
 * urban.fetch('1337').then(console.log);
 */
  fetch(id) {
    return new fetch('GET', `${BASE_URL}/define?&defid=${id}`)
      .then(({ body }) => body && body.result_type != 'no_results' ?
        new Definition(body.list[0], body) : Promise.reject(TypeError('No results')));
  },

  /**
 * Gets all definitions from one specific page
 * @method all
 * @param  {string} query Query to fetch with specific definitions
 * @param  {number} [page=1]  From which page to fetch definitions
 * @returns {Promise<Definition[]>} A array of definitions
 * @example
 * const urban = require('urban.js');
 *
 * urban.all('hello', 2).then(console.log);
 */
  all(query, page) {
    return Urban.search(query, page)
      .then((body) => body.list.map((d) => new Definition(d, body)));
  },

  /**
 * Gives raw response from API
 * @method search
 * @param  {string} query Query to search with
 * @param  {number} [page=1] Which page to search in
 * @returns {Promise<Object>} A raw request body from API
 * @example
 * const { search } = require('urban.js');
 *
 * search('hello', 2).then(console.log);
 */
  search(query, page = 1) {
    return new fetch('GET', `${BASE_URL}/define?page=${page}&term=${query}`)
      .then(({ body }) => body && body.result_type != 'no_results' ? body : Promise.reject(TypeError('No results')));
  },
};

module.exports = Object.assign(first, Urban);
