'use strict';
module.exports = function (element) {
	if (!element || element.nodeType !== 1) {
		throw new TypeError('Expected a DOM node to check');
	}

	var tagName = element.tagName.toLowerCase();

	return tagName === 'button' || (tagName === 'input' && element.type === 'button');
};
