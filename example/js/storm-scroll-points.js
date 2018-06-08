/**
 * @name storm-scroll-points: Trigger className changes and callbacks when an element scrolls into view
 * @version 1.1.2: Fri, 08 Jun 2018 16:13:14 GMT
 * @author stormid
 * @license MIT
 */
import throttle from 'raf-throttle';

const defaults = {
		offset: 0,
		callback: false,
		className: 'is--scrolled-in',
		unload: true
	},
	StormScrollPoints = {
		init() {
			this.throttled = throttle(() => {
				this.check.call(this);
			});
			
			document.addEventListener('scroll', this.throttled, true);
			document.addEventListener('resize', this.throttled, true);
			this.check();

			return this;
		},
		check(){
			if (!this.enteredView()) return;
			
			this.DOMElement.classList.add(this.settings.className);
			!!this.settings.callback && this.settings.callback.call(this);

			if(this.settings.unload) {
				document.removeEventListener('scroll', this.throttled, true);
				document.removeEventListener('resize', this.throttled, true);
			}
		},
		enteredView(){
			let box = this.DOMElement.getBoundingClientRect(),
				triggerPos = !!this.settings.offset.indexOf && this.settings.offset.indexOf('%') ? window.innerHeight - (window.innerHeight / 100) * +(this.settings.offset.substring(0, this.settings.offset.length - 1)) : window.innerHeight - +(this.settings.offset);
			
			return (box.top - (isNaN(triggerPos) ? window.innerHeight : triggerPos) <= 0);
		}
	};


const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
	
	if(!els.length) throw new Error('Scroll Points cannot be initialised, no augmentable elements found');

	return els.map(el => {
		return Object.assign(Object.create(StormScrollPoints), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };
