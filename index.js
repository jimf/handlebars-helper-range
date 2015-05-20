'use strict';

var range = require('lodash/utility/range');

/**
 * Invoke block with a range of integer values.
 *
 * @param {number} [start] Value to start at. Defaults to 0
 * @param {number} stop Value to stop at
 * @param {number} [step] Value to increment (or decrement if negative) by
 * @return {string} Result of accumulated blocks
 */
module.exports = function() {
    var args = Array.prototype.slice.call(arguments),
        rangeArgs = args.slice(0, -1),
        options = args[args.length - 1];

    return range.apply(null, rangeArgs)
        .map(function(num) { return options.fn(num); })
        .join('');
};
