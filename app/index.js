'use strict';
const Generator = require('yeoman-generator');
const path = require('path');
const _ = require('lodash');
const mkdirp = require('mkdirp');

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
    this.basePath = '';

    const promptQuestions = [
      {
        name: 'name',
        message: 'component\'s name, better prefix with milk-',
        default: this.name,
      },
      {
        name: 'author',
        message: 'author\'s name',
        store: true,
      },
      {
        name: 'version',
        message: 'component version info',
        default: '1.0.0',
      },
      {
        type: 'confirm',
        name: 'skipInstall',
        message: 'skip install dependent node_modules',
      }
    ];

    return this.prompt(promptQuestions).then((answers) => {

      this.hyphenatedComponentName = answers.name.replace(/^milk-/, '');
      this.ComponentName = this.componentName = _.capitalize(_.camelCase(this.hyphenatedComponentName));

      this.templateData = _.merge(answers, {
        hyphenatedComponentName: this.hyphenatedComponentName,
        componentName: this.componentName,
        ComponentName: this.ComponentName,
        date: this.date,
      });
      done();
    })
  }

  app() {
    this.config.save();
    this.fs.copyTpl(
      this.templatePath('README.md'), this.destinationPath(this.basePath + 'README.md'), this.templateData
    );
    this.fs.copy(
      this.templatePath('LICENSE'), this.destinationPath(this.basePath + 'LICENSE')
    );
    this.fs.copyTpl(
      this.templatePath('index.html'), this.destinationPath(this.basePath + 'index.html'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('HISTORY.md'), this.destinationPath(this.basePath + 'HISTORY.md'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'), this.destinationPath(this.basePath + 'package.json'), this.templateData
    );
    this.fs.copy(
      this.templatePath('_gitignore'), this.destinationPath(this.basePath + '.gitignore')
    );
    this.fs.copy(
      this.templatePath('_eslintrc'), this.destinationPath(this.basePath + '.eslintrc')
    );
    this.fs.copy(
      this.templatePath('_eslintignore'), this.destinationPath(this.basePath + '.eslintignore')
    );
    this.fs.copy(
      this.templatePath('_editorconfig'), this.destinationPath(this.basePath + '.editorconfig')
    );
  }

  copyTestFiles() {
    this.fs.copyTpl(
      this.templatePath('tests/Name.spec.js'), this.destinationPath(this.basePath + 'tests/' + this.ComponentName + '.spec.js'), this.templateData
    );
    this.fs.copy(
      this.templatePath('tests/index.js'), this.destinationPath(this.basePath + 'tests/index.js')
    );
  }

  copyComponentFiles() {
    this.fs.copyTpl(
      this.templatePath('src/index.js'), this.destinationPath(this.basePath + 'src/index.js'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('src/index.scss'), this.destinationPath(this.basePath + 'src/index.scss'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('src/Name.jsx'), this.destinationPath(this.basePath + 'src/' + this.ComponentName + '.jsx'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('src/svg/index.js'), this.destinationPath(this.basePath + 'src/svg/index.js'), this.templateData
    );
    this.fs.copy(
      this.templatePath('src/svg/mobile.svg'), this.destinationPath(this.basePath + 'src/svg/mobile.svg')
    );
  }

  copyDemoFiles() {
    this.fs.copyTpl(
      this.templatePath('demo/index.js'), this.destinationPath(this.basePath + 'demo/index.js'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('demo/Demo.jsx'), this.destinationPath(this.basePath + 'demo/Demo.jsx'), this.templateData
    );
    this.fs.copyTpl(
      this.templatePath('demo/Demo.scss'), this.destinationPath(this.basePath + 'demo/Demo.scss'), this.templateData
    )
  }

  copyBuildFiles() {
    mkdirp.sync(this.basePath + 'build')
  }
};
