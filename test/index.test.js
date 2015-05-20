'use strict';

var test = require('tape'),
    Handlebars = require('handlebars'),
    rangeHelper = require('..');

Handlebars.registerHelper('range', rangeHelper);

test('range', function(assert) {
    var cases = [
        {
            source: '<ul>{{#range 4}}<li>{{this}}</li>{{/range}}</ul>',
            expected: '<ul><li>0</li><li>1</li><li>2</li><li>3</li></ul>',
        },
        {
            source: '<ul>{{#range 1 5}}<li>{{this}}</li>{{/range}}</ul>',
            expected: '<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>',
        },
        {
            source: '<ul>{{#range 0 20 5}}<li>{{this}}</li>{{/range}}</ul>',
            expected: '<ul><li>0</li><li>5</li><li>10</li><li>15</li></ul>',
        },
        {
            source: '<ul>{{#range 4}}<li>{{../foo}}{{this}}</li>{{/range}}</ul>',
            context: { foo: 'foo' },
            expected: '<ul><li>foo0</li><li>foo1</li><li>foo2</li><li>foo3</li></ul>',
        }
    ];

    cases.forEach(function(testcase) {
        var template = Handlebars.compile(testcase.source),
            actual = template(testcase.context || {});

        assert.equal(actual, testcase.expected,
            'should return expected output');
    });

    assert.end();
});
