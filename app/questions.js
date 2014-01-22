(function () {
    'use strict';
    var MODULES = {
        ANGULAR: "angular",
        BACKBONE: "backbone",
        LESS: "less"
    };

    var STRUCTURES = {
        WIDGET: 1,
        TYPICAL_ANGULAR: 2,
        MVVM: 3
    };

    module.exports = {
        MODULES: MODULES,
        STRUCTURES: STRUCTURES,
        NAME: {
            type: 'input',
            name: 'authorName',
            message: 'What is your name?',
            defaults: 'Please enter your username...'
        },
        MODULE: {
            type: 'input',
            name: 'moduleName',
            message: 'What is the name of your module?',
            defaults: 'Please enter your module name...'
        },
        DESCRIPTION: {
            type: 'input',
            name: 'description',
            message: 'What is the description of your module?'
        },
        MODULE_DEPENDENCIES: {
            type: 'checkbox',
            name: 'modules',
            message: 'Which javascript modules do you require?',
            choices: [
                {
                    name: 'angular',
                    value: MODULES.ANGULAR,
                    checked: true
                },
                {
                    name: 'backbone',
                    value: MODULES.BACKBONE,
                    checked: true
                },
                {
                    name: 'less',
                    value: MODULES.LESS,
                    checked: true
                }
            ]
        },
        STRUCTURE: {
            type: 'checkbox',
            name: 'structures',
            message: 'What structure would you want?',
            choices: [
                {
                    name: 'Widget',
                    value: STRUCTURES.WIDGET,
                    checked: true
                },
                {
                    name: 'Typical Angular',
                    value: STRUCTURES.TYPICAL_ANGULAR
                },
                {
                    name: 'MVVM',
                    value: STRUCTURES.MVVM
                }
            ]
        },
        FIRST_WIDGET: {
            type: 'input',
            name: 'firstWidget',
            message: 'What is the first widget you would like to create?'
        }
    };
}());