/**
 * @name storm-scrollpoints: Attach actions and classes to elements scrolling into view.
 * @version 0.1.1: Mon, 02 May 2016 13:03:11 GMT
 * @author stormid
 * @license MIT
 */(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.StormScrollpoints = factory();
  }
}(this, function() {
	'use strict';
    
    var instances = [],
        defaults = {
            offset: 0,
            callback: null,
            throttle: 60,
            className: 'is-scrolled-in',
            unload: true
        },
        StormScrollpoints = {
            init: function() {
				this.throttled = STORM.UTILS.throttle(function(){
					this.check.call(this);
				}.bind(this), this.settings.throttle);
				
				document.addEventListener('scroll', this.throttled, true);
				document.addEventListener('resize', this.throttled, true);
        		this.check();
            },
			check: function(){
				if (!!this.enteredView()) {
					STORM.UTILS.classlist(this.DOMElement).add(this.settings.className);
					!!this.settings.callback && this.settings.callback.call(this);

					if(!!this.settings.unload) {
						document.removeEventListener('scroll', this.throttled, true);
						document.addEventListener('resize', this.throttled, true);
					}
				}
			},
			enteredView: function(){
                var box = this.DOMElement.getBoundingClientRect(),
                    triggerPos = !!this.settings.offset.indexOf && this.settings.offset.indexOf('%') ? window.innerHeight - (window.innerHeight / 100) * +(this.settings.offset.substring(0, this.settings.offset.length - 1)) : window.innerHeight - +(this.settings.offset);
                
                triggerPos = isNaN(triggerPos) ? window.innerHeight : triggerPos;
                
                return (box.top - triggerPos <= 0);
			}
        };
    
    function init(sel, opts) {
        var els = [].slice.call(document.querySelectorAll(sel));
        
        if(els.length === 0) {
            throw new Error('Scrollpoints cannot be initialised, no augmentable elements found');
        }
        
        els.forEach(function(el, i){
            instances[i] = STORM.UTILS.assign(Object.create(StormScrollpoints), {
                DOMElement: el,
                settings: STORM.UTILS.merge({}, defaults, opts)
            });
            instances[i].init();
        });
        return instances;
    }
    
    function reload(els, opts) {
        destroy();
        init(els, opts);
    }
    
    function destroy() {
		document.removeEventListener('scroll', self.throttled);
		document.removeEventListener('resize', self.throttled);
        instances = [];  
    }
    
	return {
		init: init,
        reload: reload,
        destroy: destroy
	};
	
 }));