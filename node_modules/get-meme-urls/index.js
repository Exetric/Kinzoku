'use strict';
const got = require('got');
const isUrlRelativeWithoutDomain = require('is-url-relative-without-domain');

const API_SEARCH_URL = 'http://version1.api.memegenerator.net/Instances_Search';

function getMemeUrls(searchQuery, options) {
  searchQuery = searchQuery || 'agile';
  options = options || {};

  const API_KEY = options.apiKey || process.env.MEMEGENERATOR_API_KEY;
  const pageIndex = options.pageIndex;
  const pageSize = options.pageSize;

  const queryObj = {
    q: searchQuery
  };

  queryObj.apiKey = API_KEY || 'demo';

  if (pageIndex) {
    queryObj.pageIndex = pageIndex;
  }

  if (pageSize) {
    queryObj.pageSize = pageSize;
  }

  return new Promise((resolve, reject) => {
    got(API_SEARCH_URL, {
      query: queryObj,
      json: true
    }).then(response => {
      const body = response.body;

      if (body.success) {
        const result = body.result;

        const instanceUrls = result.map(obj => {
          let instanceImageUrl = obj.instanceImageUrl;

          if (isUrlRelativeWithoutDomain(instanceImageUrl)) {
            instanceImageUrl = `https://cdn.meme.am${instanceImageUrl}`;
          }

          return instanceImageUrl;
        });
        resolve(instanceUrls);
      } else {
        reject(new Error(body.errorMessage));
      }
    }).catch(err => {
      reject(err);
    });
  });
}

module.exports = getMemeUrls;
