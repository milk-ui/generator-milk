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
        message: 'component\'s name, better prefix with milkui-',
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
      }
    ];

    return this.prompt(promptQuestions).then((answers) => {
      
      this.hyphenatedComponentName = answers.name.replace(/^milkui-/, '');

      this.componentName = this.hyphenatedComponentName
                                .split('-').map((s) => s[0].toUpperCase() + s.substring(1)).join('');

      this.ComponentName = this.componentName;
      this.templateData = _.merge(answers, {
        hyphenatedComponentName: this.hyphenatedComponentName,
        componentName: this.componentName,
        ComponentName: this.ComponentName,
        date: this.date,
      });

      done();
    })
  }

  copyTpl(template, destination, data) {
    if (!template || !destination || !data) {
      return;
    }
    destination = this.basePath + destination;
    this.fs.copyTpl(
      this.templatePath(template),
      this.destinationPath(destination),
      data);
  }

  copy(template, destination) {
    if (!template || !destination) {
      return;
    }
    destination = this.basePath + destination;
    this.fs.copy(
      this.templatePath(template),
      this.destinationPath(destination));
  }

  app() {
    this.config.save();

    this.copyTpl('README.md', 'README.md', this.templateData);

    this.copyTpl('HISTORY.md', 'HISTORY.md', this.templateData);

    this.copyTpl('LICENSE', 'LICENSE', this.templateData);

    this.copyTpl('index.html', 'index.html', this.templateData);

    this.copyTpl('_package.json', 'package.json', this.templateData);

    this.copy('_gitignore', '.gitignore');

    this.copy('_eslintrc', '.eslintrc');

    this.copy('_eslintignore', '.eslintignore');

    this.copy('_editorconfig', '.editorconfig');
  }

  copyTestFiles() {
    this.copyTpl('tests/Name.spec.js', 'tests/' + this.ComponentName + '.spec.js', this.templateData);

    this.copy('tests/index.js', 'tests/index.js');
  }

  copyComponentFiles() {
    this.copyTpl('src/index.js', 'src/index.js', this.templateData);

    this.copyTpl('src/index.scss', 'src/index.scss', this.templateData);

    this.copyTpl('src/Name.jsx', 'src/' + this.ComponentName + '.jsx', this.templateData);

    this.copyTpl('src/svg/index.js', 'src/svg/index.js', this.templateData);

    this.copy('src/svg/mobile.svg', 'src/svg/mobile.svg', this.templateData);
  }

  copyDemoFiles() {
    this.copyTpl('demo/index.js', 'demo/index.js', this.templateData);

    this.copyTpl('demo/Demo.jsx', 'demo/Demo.jsx', this.templateData);
    
    this.copyTpl('demo/Demo.scss', 'demo/Demo.scss', this.templateData);
  }

  copyBuildFiles() {
    mkdirp.sync(this.basePath + 'build')
  }
};
