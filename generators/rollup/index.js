var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'inputFile',
        message: 'The entry point to bundle of your package',
        default: 'src/index.ts',
      },
    ]);
  }

  async installingRollup() {
    await this.addDevDependencies([
      'rollup',
      '@rollup/plugin-babel',
      '@rollup/plugin-commonjs',
      '@rollup/plugin-node-resolve',
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('rollup.config.js'),
      this.destinationPath('rollup.config.js'),
      {
        inputFile: this.answers.inputFile,
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(this.answers.inputFile)
    );
  }

  addBuildScript() {
    const pkgJson = {
      scripts: {
        'build:module': 'rollup --config',
      },
      main: 'dist/index.js',
      exports: {
        '.': './dist/index.js',
      },
      files: ['dist'],
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }
};
