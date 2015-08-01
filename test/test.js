'use strict';
var assert = require('assert');
var isButton = require('../');

it('Detects <button>', function () {
	assert(isButton(document.createElement('button')));
});

it('Detects <input type="button">', function () {
	var fixture = document.createElement('input');
	fixture.type = 'button';

	assert(isButton(fixture));
});

it('Doesn\'t detect any other elements', function () {
	assert(!isButton(document.createElement('strong')));

	var fixture = document.createElement('input');
	fixture.type = 'submit';
	assert(!isButton(fixture));
});

it('throws on nonsense input', function () {
	[[], null, undefined, 1234, '', document].forEach(function (input) {
		assert.throws(function () {
			isButton(input);
		});
	});
});
