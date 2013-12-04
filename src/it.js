//     It
//     (c) simonfan
//     It is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module It
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(["lodash","document-matcher"], function (Lodash, DocumentMatcher) {
	'use strict';

	console.log('It running!');

	var It = function It() {

	};


	return It;
});
