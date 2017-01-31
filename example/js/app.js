(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormLoad = require('storm-load');

var _stormLoad2 = _interopRequireDefault(_stormLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onDOMContentLoadedTasks = [function () {

	(0, _stormLoad2.default)('./js/storm-scroll-points.standalone.js').then(function () {
		StormScrollPoints.init('.js-scroll-point');
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
 * @version 0.4.0: Fri, 20 Jan 2017 16:57:34 GMT
 * @author stormid
 * @license MIT
 */
var create = function create(url) {
	return new Promise(function (resolve, reject) {
		var s = document.createElement('script');
		s.src = url;
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
			create(urls.shift()).then(next).catch(reject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJub2RlX21vZHVsZXMvc3Rvcm0tbG9hZC9kaXN0L3N0b3JtLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNLDBCQUEwQixDQUFDLFlBQU07O0FBRXRDLDBCQUFLLHdDQUFMLEVBQ0UsSUFERixDQUNPLFlBQU07QUFDWCxvQkFBa0IsSUFBbEIsQ0FBdUIsa0JBQXZCO0FBQ0EsRUFIRjtBQUlBLENBTitCLENBQWhDOztBQVFBLElBQUcsc0JBQXNCLE1BQXpCLEVBQWlDLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFBRSx5QkFBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxFQUFEO0FBQUEsU0FBUSxJQUFSO0FBQUEsRUFBaEM7QUFBZ0QsQ0FBcEc7Ozs7Ozs7O0FDVmpDOzs7Ozs7QUFNQSxJQUFNLFNBQVMsU0FBVCxNQUFTLE1BQU87QUFDckIsUUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3ZDLE1BQUksSUFBSSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUjtBQUNBLElBQUUsR0FBRixHQUFRLEdBQVI7QUFDQSxJQUFFLE1BQUYsR0FBVyxFQUFFLGtCQUFGLEdBQXVCLFlBQVc7QUFDNUMsT0FBSSxDQUFDLEtBQUssVUFBTixJQUFvQixLQUFLLFVBQUwsS0FBb0IsVUFBNUMsRUFBd0Q7QUFDeEQsR0FGRDtBQUdBLElBQUUsT0FBRixHQUFZLEVBQUUsT0FBRixHQUFZLE1BQXhCO0FBQ0EsV0FBUyxJQUFULENBQWMsV0FBZCxDQUEwQixDQUExQjtBQUNBLEVBUk0sQ0FBUDtBQVNBLENBVkQ7O0FBWU8sSUFBTSxvQ0FBYyxTQUFkLFdBQWMsT0FBUTtBQUNsQyxRQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdkMsTUFBSSxPQUFPLFNBQVAsSUFBTyxHQUFNO0FBQ2hCLE9BQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0IsT0FBTyxTQUFQO0FBQ2xCLFVBQU8sS0FBSyxLQUFMLEVBQVAsRUFBcUIsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0MsS0FBaEMsQ0FBc0MsTUFBdEM7QUFDQSxHQUhEO0FBSUE7QUFDQSxFQU5NLENBQVA7QUFPQSxDQVJNOztrQkFVUSxVQUFDLElBQUQsRUFBd0I7QUFBQSxLQUFqQixLQUFpQix1RUFBVCxJQUFTOztBQUN0QyxRQUFPLEdBQUcsTUFBSCxDQUFVLElBQVYsQ0FBUDtBQUNBLEtBQUksQ0FBQyxLQUFMLEVBQVksT0FBTyxZQUFZLElBQVosQ0FBUDs7QUFFWixRQUFPLFFBQVEsR0FBUixDQUFZLEtBQUssR0FBTCxDQUFTO0FBQUEsU0FBTyxPQUFPLEdBQVAsQ0FBUDtBQUFBLEVBQVQsQ0FBWixDQUFQO0FBQ0EsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTG9hZCBmcm9tICdzdG9ybS1sb2FkJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4ge1xuXG5cdExvYWQoJy4vanMvc3Rvcm0tc2Nyb2xsLXBvaW50cy5zdGFuZGFsb25lLmpzJylcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRTdG9ybVNjcm9sbFBvaW50cy5pbml0KCcuanMtc2Nyb2xsLXBvaW50Jyk7XG5cdFx0fSk7XG59XTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tbG9hZDogTGlnaHR3ZWlnaHQgcHJvbWlzZS1iYXNlZCBzY3JpcHQgbG9hZGVyXG4gKiBAdmVyc2lvbiAwLjQuMDogRnJpLCAyMCBKYW4gMjAxNyAxNjo1NzozNCBHTVRcbiAqIEBhdXRob3Igc3Rvcm1pZFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNvbnN0IGNyZWF0ZSA9IHVybCA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzLnNyYyA9IHVybDtcblx0XHRzLm9ubG9hZCA9IHMub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMucmVhZHlTdGF0ZSB8fCB0aGlzLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHJlc29sdmUoKTtcblx0XHR9O1xuXHRcdHMub25lcnJvciA9IHMub25hYm9ydCA9IHJlamVjdDtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzeW5jaHJvbm91cyA9IHVybHMgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxldCBuZXh0ID0gKCkgPT4ge1xuXHRcdFx0aWYgKCF1cmxzLmxlbmd0aCkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdGNyZWF0ZSh1cmxzLnNoaWZ0KCkpLnRoZW4obmV4dCkuY2F0Y2gocmVqZWN0KTtcblx0XHR9O1xuXHRcdG5leHQoKTtcblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAodXJscywgYXN5bmMgPSB0cnVlKSA9PiB7XG5cdHVybHMgPSBbXS5jb25jYXQodXJscyk7XG5cdGlmICghYXN5bmMpIHJldHVybiBzeW5jaHJvbm91cyh1cmxzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwodXJscy5tYXAodXJsID0+IGNyZWF0ZSh1cmwpKSk7XG59OyJdfQ==
