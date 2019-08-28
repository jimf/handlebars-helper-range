'use strict';

/**
 * Produce a range of numbers (positive and/or negative), processing from
 * `start` up to, but not including, `end`.
 *
 * @param {number} start Range start value (inclusive)
 * @param {number} [end] Range end value (exclusive)
 * @param {number} [step=1] Value to increment by
 * @return {number[]} Array of numbers
 */
function range(start, end, step) {
    start = Number(start) || 0;
    end = end == null ? end : Number(end);
    step = step == null ? 1 : Number(step);

    if (end == null) {
        end = start;
        start = 0;
    }

    var length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    var result = new Array(length);

    for (var i = 0; i < length; i += 1) {
        result[i] = start;
        start += step;
    }

    return result;
}

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
