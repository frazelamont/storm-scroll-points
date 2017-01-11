import ScrollPoints from './libs/storm-scroll-points';

const onDOMContentLoadedTasks = [() => {
	let sp = ScrollPoints.init('.js-scroll-point');
	console.log(sp);
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });