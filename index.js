'use strict';

module.exports = function (element) {
	if (!element || element.nodeType !== 1) {
		throw new TypeError('Expected a DOM node to check');
	}

	var regNames = /(btn|button|^(b)\b|\b(but)\b)/gi;
	var regWhitespaces = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	var tagName = element.tagName.toLowerCase();

	return tagName === 'button' || (tagName === 'input' && element.type === 'button') || (tagName === 'a' && element.className.replace(regWhitespaces, '').match(regNames));
};
