import should from 'should';
import ScrollPoints from '../dist/storm-scroll-points';
import 'jsdom-global/register';

const html = `<div class="js-scroll-point scroll-point scroll-point--1" style="margin-top:900px"></div>
        <div class="js-scroll-point scroll-point scroll-point--2" style="margin-top:800px;margin-bottom:900px"></div>`;

document.body.innerHTML = html;



describe('Initialisation', () => {

	let ScrollPointItem = ScrollPoints.init('.scroll-point--1', {
			callback(){
				
			}
		}),
		ScrollPointItem2 = ScrollPoints.init('.scroll-point--2');

	it('should return an array', () => {
		should(ScrollPointItem)
		.Array()
		.and.have.lengthOf(1);
	});
	
	it('should throw an error if no elements are found', () => {
		ScrollPoints.init.bind(ScrollPoints, '.js-err').should.throw();
	});

	it('should initialisation with different settings if different options are passed', () => {
		should(ScrollPointItem2[0].settings.callback).not.equal(ScrollPointItem[0].settings.callback);
	});
	
	it('each array item should be an object with the correct properties', () => {
		
		ScrollPointItem[0].should.have.property('settings').Object();
		ScrollPointItem[0].should.have.property('throttled').Function();
		ScrollPointItem[0].should.have.property('init').Function();
		ScrollPointItem[0].should.have.property('check').Function();
		ScrollPointItem[0].should.have.property('enteredView').Function();
	});

});

describe('Fns', () => {
	let ScrollPointItem = ScrollPoints.init('.scroll-point--1');

	it('enteredView should return a boolean', () => {
		should(ScrollPointItem[0].enteredView()).Boolean();
	});
});