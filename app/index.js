var BackularGenerator = (function (undefined) {
    'use strict';

    var util = require('util');
    var path = require('path');
    var yeoman = require('yeoman-generator');
    var questions = require('./questions.js');
    var resolver = require('./resolver.js');


    var BackularGenerator = module.exports = function BackularGenerator(args, options, config) {
        yeoman.generators.Base.apply(this, arguments);

        this.on('end', function () {
            this.installDependencies({ skipInstall: options['skip-install'] });
        });

        this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    };

    util.inherits(BackularGenerator, yeoman.generators.Base);

    BackularGenerator.prototype.askForModules = function askForModules() {
        var cb = this.async();

        // have Yeoman greet the user.
        console.log(this.yeoman);

        var prompts = [
            questions.NAME,
            questions.MODULE,
            questions.DESCRIPTION,
            questions.MODULE_DEPENDENCIES
        ];

        this.prompt(prompts, function (props) {
            this.authorName = resolver.questionProperty(props, questions.NAME);
            this.moduleName = resolver.questionProperty(props, questions.MODULE);
            this.appName = this.moduleName + 'App';
            this.description = resolver.questionProperty(props, questions.DESCRIPTION);
            this.modules = resolver.questionProperty(props, questions.MODULE_DEPENDENCIES);

            this.angular = resolver.contains(this.modules, questions.MODULES.ANGULAR);
            this.backbone = resolver.contains(this.modules, questions.MODULES.BACKBONE);
            this.less = resolver.contains(this.modules, questions.MODULES.LESS);
            cb();
        }.bind(this));
    };

    BackularGenerator.prototype.askForAngularStructure = function askForAngularStructure() {
        if (this.modules.indexOf(questions.MODULES.ANGULAR) === -1) {
            return;
        }

        var cb = this.async();

        var prompts = [
            questions.STRUCTURE
        ];

        this.prompt(prompts, function (props) {
            this.structures = resolver.questionProperty(props, questions.STRUCTURE);
            this.widgets = resolver.contains(this.structures, questions.STRUCTURES.WIDGET);
            this.typicalAngular = resolver.contains(this.structures, questions.STRUCTURES.TYPICAL_ANGULAR);
            this.mvvm = resolver.contains(this.structures, questions.STRUCTURES.MVVM);
            cb();
        }.bind(this));
    };

    BackularGenerator.prototype.app = function app() {
        this.mkdir('app');
        this.mkdir('test');

        this.template('karma.conf.js', 'karma.conf.js');
        this.copy('index.html', 'app/index.html');
        this.copy('main.html', 'app/views/main.html');
        this.template('javascript/app.js', 'app/app.js');
    };

    BackularGenerator.prototype.widget = function widget() {
        if (this.structures.indexOf(questions.STRUCTURES.WIDGET) === -1) {
            return;
        }

        this.mkdir('app/widgets');
        this.mkdir('test/widgets');
    };

    BackularGenerator.prototype.projectfiles = function projectfiles() {
        this.copy('common/_package.json', 'package.json');
        this.copy('common/_bower.json', 'bower.json');
        this.copy('common/.bowerrc', '.bowerrc');
        this.copy('common/editorconfig', '.editorconfig');
        this.copy('common/jshintrc', '.jshintrc');
        this.template('common/Gruntfile.js', 'Gruntfile.js');
        console.log('project setup is ready!');
    };

    return BackularGenerator;
}());