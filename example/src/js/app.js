/*global window, document, console, require*/
var STORM = (function(w, d) {
	'use strict';
    
    var ScrollPoints = require('./libs/scrollpoints'),
        init = function() {
            ScrollPoints.init(d.querySelectorAll('.scrollpoint'), {
                offset: '50%',
                callback: function () {
                    console.log(this.element.getAttribute('id'));
                },
                delay: 60,
                unload: true
            });
        };
	
	return {
		init: init
	};
	
})(window, document, undefined);

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', STORM.init, false);