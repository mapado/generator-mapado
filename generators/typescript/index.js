var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async installingTypescript() {
    await this.addDevDependencies(['typescript']);
  }

  addBuildScript() {
    const pkgJson = {
      scripts: {
        'lint:types': 'tsc --noEmit',
      },
      types: 'dist/types/index.d.ts',
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
  }
};
