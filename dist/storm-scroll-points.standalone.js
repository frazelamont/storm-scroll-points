/**
 * @name storm-scroll-points: Trigger className changes and callbacks when an element scrolls into view
 * @version 1.1.2: Fri, 08 Jun 2018 16:13:15 GMT
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
function unwrapExports(x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var rafThrottle_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var rafThrottle = function rafThrottle(callback) {
		var requestId = void 0;

		var later = function later(context, args) {
			return function () {
				requestId = null;
				callback.apply(context, args);
			};
		};

		var throttled = function throttled() {
			if (requestId === null || requestId === undefined) {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				requestId = requestAnimationFrame(later(this, args));
			}
		};

		throttled.cancel = function () {
			return cancelAnimationFrame(requestId);
		};

		return throttled;
	};

	exports.default = rafThrottle;
});

var throttle = unwrapExports(rafThrottle_1);

var defaults = {
	offset: 0,
	callback: false,
	className: 'is--scrolled-in',
	unload: true
};
var StormScrollPoints = {
	init: function init() {
		var _this = this;

		this.throttled = throttle(function () {
			_this.check.call(_this);
		});

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

var stormScrollPoints = { init: init };

exports.default = stormScrollPoints;;
}));
