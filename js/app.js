(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormLoad = require('storm-load');

var _stormLoad2 = _interopRequireDefault(_stormLoad);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {

	(0, _stormLoad2.default)('./js/storm-scroll-points.standalone.js').then(function () {
		StormScrollPoints.init('.js-scroll-point', {
			offset: '50%'
		});
	});
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
	onDOMContentLoadedTasks.forEach(function (fn) {
		return fn();
	});
});

},{"storm-load":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.5.1: Fri, 10 Mar 2017 17:30:13 GMT
 * @author stormid
 * @license MIT
 */
var create = function create(url) {
	var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	return new Promise(function (resolve, reject) {
		var s = document.createElement('script');
		s.src = url;
		s.async = async;
		s.onload = s.onreadystatechange = function () {
			if (!this.readyState || this.readyState === 'complete') resolve();
		};
		s.onerror = s.onabort = reject;
		document.head.appendChild(s);
	});
};

var synchronous = exports.synchronous = function synchronous(urls) {
	return new Promise(function (resolve, reject) {
		var next = function next() {
			if (!urls.length) return resolve();
			create(urls.shift(), false).then(next).catch(reject);
		};
		next();
	});
};

exports.default = function (urls) {
	var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	urls = [].concat(urls);
	if (!async) return synchronous(urls);

	return Promise.all(urls.map(function (url) {
		return create(url);
	}));
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJub2RlX21vZHVsZXMvc3Rvcm0tbG9hZC9kaXN0L3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLFlBQU0sQUFFdEM7OzBCQUFBLEFBQUssMENBQUwsQUFDRSxLQUFLLFlBQU0sQUFDWDtvQkFBQSxBQUFrQixLQUFsQixBQUF1QjtXQUF2QixBQUEyQyxBQUNsQyxBQUVUO0FBSDJDLEFBQzFDO0FBSEgsQUFNQTtBQVJELEFBQWdDLENBQUE7O0FBVWhDLElBQUcsc0JBQUgsQUFBeUIsZUFBUSxBQUFPLGlCQUFQLEFBQXdCLG9CQUFvQixZQUFNLEFBQUU7eUJBQUEsQUFBd0IsUUFBUSxVQUFBLEFBQUMsSUFBRDtTQUFBLEFBQVE7QUFBeEMsQUFBZ0Q7QUFBcEcsQ0FBQTs7Ozs7Ozs7QUNaakM7Ozs7OztBQU1BLElBQU0sU0FBUyxTQUFULE1BQVMsQ0FBQyxHQUFELEVBQXVCO0FBQUEsS0FBakIsS0FBaUIsdUVBQVQsSUFBUzs7QUFDckMsUUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3ZDLE1BQUksSUFBSSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUjtBQUNBLElBQUUsR0FBRixHQUFRLEdBQVI7QUFDQSxJQUFFLEtBQUYsR0FBVSxLQUFWO0FBQ0EsSUFBRSxNQUFGLEdBQVcsRUFBRSxrQkFBRixHQUF1QixZQUFXO0FBQzVDLE9BQUksQ0FBQyxLQUFLLFVBQU4sSUFBb0IsS0FBSyxVQUFMLEtBQW9CLFVBQTVDLEVBQXdEO0FBQ3hELEdBRkQ7QUFHQSxJQUFFLE9BQUYsR0FBWSxFQUFFLE9BQUYsR0FBWSxNQUF4QjtBQUNBLFdBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsQ0FBMUI7QUFDQSxFQVRNLENBQVA7QUFVQSxDQVhEOztBQWFPLElBQU0sb0NBQWMsU0FBZCxXQUFjLE9BQVE7QUFDbEMsUUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3ZDLE1BQUksT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNoQixPQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCLE9BQU8sU0FBUDtBQUNsQixVQUFPLEtBQUssS0FBTCxFQUFQLEVBQXFCLEtBQXJCLEVBQTRCLElBQTVCLENBQWlDLElBQWpDLEVBQXVDLEtBQXZDLENBQTZDLE1BQTdDO0FBQ0EsR0FIRDtBQUlBO0FBQ0EsRUFOTSxDQUFQO0FBT0EsQ0FSTTs7a0JBVVEsVUFBQyxJQUFELEVBQXdCO0FBQUEsS0FBakIsS0FBaUIsdUVBQVQsSUFBUzs7QUFDdEMsUUFBTyxHQUFHLE1BQUgsQ0FBVSxJQUFWLENBQVA7QUFDQSxLQUFJLENBQUMsS0FBTCxFQUFZLE9BQU8sWUFBWSxJQUFaLENBQVA7O0FBRVosUUFBTyxRQUFRLEdBQVIsQ0FBWSxLQUFLLEdBQUwsQ0FBUztBQUFBLFNBQU8sT0FBTyxHQUFQLENBQVA7QUFBQSxFQUFULENBQVosQ0FBUDtBQUNBLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IExvYWQgZnJvbSAnc3Rvcm0tbG9hZCc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IHtcblxuXHRMb2FkKCcuL2pzL3N0b3JtLXNjcm9sbC1wb2ludHMuc3RhbmRhbG9uZS5qcycpXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0U3Rvcm1TY3JvbGxQb2ludHMuaW5pdCgnLmpzLXNjcm9sbC1wb2ludCcsIHtcblx0XHRcdFx0b2Zmc2V0OiAnNTAlJ1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tbG9hZDogTGlnaHR3ZWlnaHQgcHJvbWlzZS1iYXNlZCBzY3JpcHQgbG9hZGVyXG4gKiBAdmVyc2lvbiAwLjUuMTogRnJpLCAxMCBNYXIgMjAxNyAxNzozMDoxMyBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGNyZWF0ZSA9ICh1cmwsIGFzeW5jID0gdHJ1ZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0cy5zcmMgPSB1cmw7XG5cdFx0cy5hc3luYyA9IGFzeW5jO1xuXHRcdHMub25sb2FkID0gcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghdGhpcy5yZWFkeVN0YXRlIHx8IHRoaXMucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykgcmVzb2x2ZSgpO1xuXHRcdH07XG5cdFx0cy5vbmVycm9yID0gcy5vbmFib3J0ID0gcmVqZWN0O1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN5bmNocm9ub3VzID0gdXJscyA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IG5leHQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIXVybHMubGVuZ3RoKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0Y3JlYXRlKHVybHMuc2hpZnQoKSwgZmFsc2UpLnRoZW4obmV4dCkuY2F0Y2gocmVqZWN0KTtcblx0XHR9O1xuXHRcdG5leHQoKTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAodXJscywgYXN5bmMgPSB0cnVlKSA9PiB7XG5cdHVybHMgPSBbXS5jb25jYXQodXJscyk7XG5cdGlmICghYXN5bmMpIHJldHVybiBzeW5jaHJvbm91cyh1cmxzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwodXJscy5tYXAodXJsID0+IGNyZWF0ZSh1cmwpKSk7XG59OyJdfQ==
