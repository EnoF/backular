(function () {
    'use strict';
    var util = require('util');
    var path = require('path');
    var yeoman = require('yeoman-generator');

    return module.exports = function Generator() {
        yeoman.generators.NamedBase.apply(this, arguments);

        try {
            this.appname = require(path.join(process.cwd(), 'package.json')).name;
        } catch (e) {
            this.appname = path.basename(process.cwd());
        }
        this.appname = this._.slugify(this._.humanize(this.appname));
    };
}());