'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../scriptBase.js');

var WidgetGenerator = module.exports = function WidgetGenerator(args, options, config) {
    ScriptBase.apply(this, arguments);

    console.log('You called the widget subgenerator with the argument ' + this.name + '.');
};

util.inherits(WidgetGenerator, yeoman.generators.NamedBase);

WidgetGenerator.prototype.files = function files() {
    this.template('widget.js', 'app/widgets/' + this.name + '.js');
    this.template('widgetSpec.js', 'test/specs/widgets/' + this.name + 'Spec.js');
};
