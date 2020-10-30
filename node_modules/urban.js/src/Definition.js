/**
 * Definition class
 * @param {Object} data Data about definition from list object
 * @param {Object} body Data about tags and sounds from request body
 * @extends {Object}
 * @example
 * Definition {
 id: 69266,
 word: 'hello',
 thumbsUp: 3297,
 thumbsDown: 936,
 author: 'mad at the world',
 URL: 'http://hello.urbanup.com/69266',
 example: 'What the hell(mom enters)-o mom.',
 definition: 'what you say when your talking casually with friends and your mom walks in the room',
 tags: [ 'hi', 'hey', 'greeting', 'yo', 'goodbye' ],
 sounds: [
 'http://media.urbandictionary.com/sound/hello-7503.mp3',
 'http://media.urbandictionary.com/sound/hello-9778.mp3',
 'http://media.urbandictionary.com/sound/hello-9897.mp3',
 'http://media.urbandictionary.com/sound/hello-10454.mp3',
 ...]
 }
 */
class Definition extends Object {
  constructor({
    word,
    defid,
    author,
    example,
    thumbs_up,
    permalink,
    definition,
    thumbs_down,
  }, { tags, sounds }) {
    super();

    /**
              * ID of definition.
              * @type {Number}
              */
    this.id = defid;

    /**
              * Word used for definition.
              * @type {String}
              */
    this.word = word;

    /**
              * Definition itself.
              * @type {String}
              */
    this.definition = definition;

    /**
              * Definition example.
              * @type {String}
              */
    this.example = example;

    /**
              * Definition permalink.
              * @type {String}
              */
    this.URL = permalink;

    /**
              * Definition author name.
              * @type {String}
              */
    this.author = author;

    /**
              * Definition thumbs up.
              * @type {Number}
              */
    this.thumbsUp = thumbs_up;

    /**
              * Definition thumbs down.
              * @type {Number}
              */
    this.thumbsDown = thumbs_down;

    /**
              * Definition tags.
              * @type {?string[]}
              */
    this.tags = Array.from(new Set(tags)) || null;

    /**
              * Definition sounds.
              * @type {?string[]}
              */
    this.sounds = sounds || null;
  }
}

module.exports = Definition;
