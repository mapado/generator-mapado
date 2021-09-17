var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async installingBabel() {
    await this.addDevDependencies([
      '@babel/core',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('.babelrc.cjs'),
      this.destinationPath('src/babelrc.cjs')
    );
  }
};
