(function () {
    'use strict';

    var questions = require('./questions.js');

    module.exports = {
        questionProperty: function (result, question) {
            return result[question.name];
        },
        contains: function (result, dependency) {
            return result.indexOf(dependency) !== -1;
        }
    };
}());