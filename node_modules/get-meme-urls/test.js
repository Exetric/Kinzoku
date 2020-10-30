import test from 'ava';
import isUrl from 'is-url';
import m from './';

test('default - should resolve with array of urls', async t => {
  const result = await m();
  t.true(result.length > 1);
  t.true(result.every(item => isUrl(item)));
});

test('arg:searchQuery - should resolve with array of urls', async t => {
  const result = await m('elasticsearch');

  t.true(result.length > 2);
});

test('mod:pagination - should resolve with array of urls with pageSize count', async t => {
  const pageSize = 2;
  const options = {
    pageSize: 2
  };

  const result = await m(null, options);
  t.true(result.length === pageSize);
});

test('mod:pagination - should support pagination', async t => {
  const firstPageOpts = {
    pageIndex: 0
  };
  const secondPageOpts = {
    pageIndex: 1
  };

  const firstPageResult = await m(null, firstPageOpts);
  const secondPageResult = await m(null, secondPageOpts);

  t.notDeepEqual(firstPageResult.sort(), secondPageResult.sort(), 'firstPage should differ from secondPage');
});

test('options:apiKey | context:invalidKey - should reject promise with an appropriate message', async t => {
  const options = {
    apiKey: 'invalid-key'
  };

  const error = await t.throws(m(null, options));
  t.regex(error.message, /(Invalid API key|ApiKey)/);
});
