import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import Start from '../src/start';

describe('App', () => {

	it('should run', () => {
		expect(typeof Start).to.equal('function');
	});

});