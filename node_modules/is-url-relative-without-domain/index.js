'use strict';

var url = require ( 'url' );
var punycode = require ( 'punycode' );
var domains = require ( 'domains' );

/**
 * Checks if an URL is relative without domain
 *
 * @param {String} str - URL for check
 * @returns {Boolean}
 */
module.exports = function ( str ) {
  if ( typeof str !== 'string' ) {
    throw new TypeError ( 'Expected a string, not ' + typeof str );
  }

  /** Check empty string */
  if ( str === '' ) {
    return true;
  }

  var m;
  var domain;

  /** URL Object */
  var urlObj = url.parse ( str.trim () );

  /** Check protocol and hostname */
  if ( urlObj.protocol || urlObj.hostname ) {
    return false;
  }

  /** Check pathname */
  if ( !urlObj.pathname ) {
    return Boolean ( urlObj.search || urlObj.hash );
  }

  /** Check // */
  if ( urlObj.pathname.indexOf ( '//' ) === 0 ) {
    return false;
  }

  /** Remove slash in start */
  if ( urlObj.pathname.indexOf ( '/' ) === 0 ) {
    urlObj.pathname = urlObj.pathname.slice ( 1 );
  }

  /** Get domain from pathname */
  if ( ( m = urlObj.pathname.match ( /(.*?)\// ) ) ) {
    domain = m[1];
  } else {
    domain = urlObj.pathname;
  }

  /** Remove port */
  domain = domain.replace ( /:(?:.*)$/, '' );

  /** Domain to Unicode */
  domain = punycode.toUnicode ( domain );

  /** Check domain */
  return !( new RegExp ( '\\.(?:' + domains.join ( '|' ) + ')$', 'i' ).test ( domain ) );
};
