import Load from 'storm-load';

const onDOMContentLoadedTasks = [() => {

	Load('./js/storm-scroll-points.standalone.js')
		.then(() => {
			StormScrollPoints.init('.js-scroll-point', {
				offset: '50%'
			});
		});
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });