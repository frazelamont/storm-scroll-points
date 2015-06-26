(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.scrollpoints = factory();
  }
}(this, function () {
    'use strict';
    
    var defaults = {
            offset: 0,
            callback: function () {},
            throttle: 60,
            class: 'is-scrolled-in',
            unload: true
        },
        UTILS = require('./utils');
    
    
    function ScrollPoint(el, opts){
        var self = this;
        this.element = el;
        
        this.settings = UTILS.merge(defaults, opts);
        
        this.throttled = UTILS.throttle(function(){
            self.check.call(self);
        }, self.settings.throttle);
        
        document.addEventListener('scroll', self.throttled, true);
        document.addEventListener('resize', self.throttled, true);
        this.check();
    }
    
    ScrollPoint.prototype.check = function(){
        var self = this,
            enterView = function(){
                var box = self.element.getBoundingClientRect(),
                    triggerPos = !!self.settings.offset.indexOf && self.settings.offset.indexOf('%') ? window.innerHeight - (window.innerHeight / 100) * +(self.settings.offset.substring(0, self.settings.offset.length - 1)) : window.innerHeight - +(self.settings.offset);
                
                triggerPos = isNaN(triggerPos) ? window.innerHeight : triggerPos;
                
                return (box.top - triggerPos <= 0);
            };
        
        if (!!enterView()) {
            UTILS.classlist.add(self.element, self.settings.class);
            self.settings.callback.call(self);
            
            if(!!self.settings.unload) {
                document.removeEventListener('scroll', self.throttled, true);
                document.addEventListener('resize', self.throttled, true);
            }
        }
        
        return this;
    };
     
    function init(els, opts) {
        if(els.length === 0 || !('querySelectorAll' in document)) {
            throw new Error('ScrollPoints cannot be initialised, unsupported browser or no target elements');
        }
        var scrollpoints = [];
        
        [].slice.call(els).forEach(function(el){
            scrollpoints.push(new ScrollPoint(el, opts));
        });
        return scrollpoints;
    }
	
	return {
		init: init
	};

}));