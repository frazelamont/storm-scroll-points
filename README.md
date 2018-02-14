# Storm Scroll Points

[![Build Status](https://travis-ci.org/mjbp/storm-scroll-points.svg?branch=master)](https://travis-ci.org/mjbp/storm-scroll-points)
[![codecov.io](http://codecov.io/github/mjbp/storm-scroll-points/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-scroll-points?branch=master)
[![npm version](https://badge.fury.io/js/storm-scroll-points.svg)](https://badge.fury.io/js/storm-scroll-points)

Trigger className changes and callbacks when an element scrolls into view. Use with care to avoid jank.

## Example
[https://mjbp.github.io/storm-scroll-points](https://mjbp.github.io/storm-scroll-points)

## Usage
HTML
```
	<div class="js-scroll-point"></div>
```

JS
```
npm i -S storm-scroll-points
```
either using es6 import
```
import ScrollPoints from 'storm-scroll-points';

ScrollPoints.init('.js-scroll-point');
```
aynchronous browser loading (use the .standalone version in the /dist folder)
```
import Load from 'storm-load';

Load('/content/js/async/storm-scroll-point.standalone.js')
    .then(() => {
        StormScrollPoints.init('.js-scroll-point');
    });
```

### Options
```
    {
		offset: 0,
		callback: false,
		throttle: 60,
		className: 'is-scrolled-in',
		unload: true //only trigger once, then unload the scroll listener
	}

```
e.g.
```
ScrollPoints.init('.js-scroll-points', {
    callback(){
		
	}
});
```

## Tests
```
npm run test
```

## Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

This module depends upon Object.assign, element.classList, and Promises, available in all evergreen browsers. ie9+ is supported with polyfills, ie8+ will work with even more polyfills for Array functions and eventListeners.

## Dependencies
None external.

Imports raf-throttle.

## License
MIT