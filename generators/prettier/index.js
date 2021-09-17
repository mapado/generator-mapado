var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async installingPrettier() {
    await this.addDevDependencies(['prettier']);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('.prettierrc'),
      this.destinationPath('.prettierrc')
    );
  }
};
