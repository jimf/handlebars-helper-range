'use strict';

var range = require('lodash/utility/range');

/**
 * Invoke block with a range of integer values.
 *
 * @param {number} [start=0] Value to start at
 * @param {number} stop Value to stop at
 * @param {number} [step=1] Value to increment or decrement by
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
