'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('babel');
  }
  
  prompting() {
    const done = this.async();
    
    this.name = path.basename(process.cwd());
    this.date = (function () {
      const date = new Date();
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    })();
    this.hyphenatedComponentName = this.name.replace(/^rmc-/, '');
    this.componentName = _.capitalize(_.camelCase(this.hyphenatedComponentName));

    const promptQuestions = [
      {
        name: 'version',
        message: 'project version',
        default: '1.0.0',
      },
      {
        name: 'description',
        message: 'project description',
        default: this.name + ' for component for rmc',
      },
      {
        name: 'author',
        message: 'author\'s name',
        store: true,
      },
      {
        type: 'confirm',
        name: 'skipInstall',
        message: 'skip install node_modules',
      }
    ];

    return this.prompt(promptQuestions).then((answers) => {
      this.answers = _.assign(answers, {
        version: '1.0.0',
        keywords: [
          this.name,
          this.componentName,
        ],
      })

      this.answers = _.assign(this.answers, {
          name: this.name,
          hyphenatedComponentName: this.hyphenatedComponentName,
          componentName: this.componentName,
          date: this.date,
      });
      done();
    })
  }

  writing() {
    this.config.save();
    this.log(this.answers);
    this.fs.copy(
      this.templatePath('_editorconfig'), this.destinationPath('public/.editorconfig')
    );
    this.fs.copy(
      this.templatePath('_eslintrc.json'), this.destinationPath('public/.eslintrc.json')
    );
    this.fs.copy(
      this.templatePath('_gitignore'), this.destinationPath('public/.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'), this.destinationPath('public/package.json'), this.answers
    );
    this.fs.copyTpl(
      this.templatePath('HISTORY.md'), this.destinationPath('public/HISTORY.md'), this.answers
    );
    this.fs.copyTpl(
      this.templatePath('README.md'), this.destinationPath('public/README.md'), this.answers
    );
  }

  demoFiles() {
    // console.info('run demoFiles method.');
    // this.mkdir('demo/src/svg');
    // this.copyTpl('index.html', 'index.html');
  }
};
