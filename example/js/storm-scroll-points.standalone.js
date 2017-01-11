/**
 * @name storm-scroll-points: Trigger className changes and callbacks when an element scrolls into view
 * @version 0.3.0: Wed, 11 Jan 2017 11:52:11 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormScrollPoints = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
	offset: 0,
	callback: false,
	throttle: 60,
	className: 'is--scrolled-in',
	unload: true
},
    StormScrollPoints = {
	init: function init() {
		var _this = this;

		this.throttled = (0, _throttle2.default)(function () {
			_this.check.call(_this);
		}, this.settings.throttle);

		document.addEventListener('scroll', this.throttled, true);
		document.addEventListener('resize', this.throttled, true);
		this.check();

		return this;
	},
	check: function check() {
		if (!this.enteredView()) return;

		this.DOMElement.classList.add(this.settings.className);
		!!this.settings.callback && this.settings.callback.call(this);

		if (this.settings.unload) {
			document.removeEventListener('scroll', this.throttled, true);
			document.removeEventListener('resize', this.throttled, true);
		}
	},
	enteredView: function enteredView() {
		var box = this.DOMElement.getBoundingClientRect(),
		    triggerPos = !!this.settings.offset.indexOf && this.settings.offset.indexOf('%') ? window.innerHeight - window.innerHeight / 100 * +this.settings.offset.substring(0, this.settings.offset.length - 1) : window.innerHeight - +this.settings.offset;

		return box.top - (isNaN(triggerPos) ? window.innerHeight : triggerPos) <= 0;
	}
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (!els.length) throw new Error('Scroll Points cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(StormScrollPoints), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

exports.default = { init: init };;
}));
