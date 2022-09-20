var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async installingEslint() {
    await this.addDevDependencies([
      'eslint',
      'eslint-config-airbnb',
      'eslint-config-prettier',
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('.eslintrc.cjs'),
      this.destinationPath('.eslintrc.cjs')
    );
  }

  addBuildScript() {
    const pkgJson = {
      scripts: {
        'lint:eslint': 'eslint . --fix',
      },
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }
};
