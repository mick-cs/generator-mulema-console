'use strict';
var yeoman = require('yeoman-generator');

var generatorConfig = require('../generator-base');

generatorConfig.writing = function () {
  this._processDirectory('', 'src/app/components/directives/',
    {
      className: this.className,
      cameledName: this.componentName,
      scriptAppName: this._getScriptAppName()
    });
}

module.exports = yeoman.Base.extend(generatorConfig);
