var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('../prettier'));
    this.composeWith(require.resolve('../babel'));
    this.composeWith(require.resolve('../rollup'));
    this.composeWith(require.resolve('../typescript'));
    this.composeWith(require.resolve('../eslint'));
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: this.appname, // Default to current folder name
      },
      {
        type: 'input',
        name: 'version',
        message: 'Project version',
        default: '1.0.0',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: null,
      },
      {
        type: 'confirm',
        name: 'private',
        message: 'private ?',
        default: 'Y',
      },
    ]);
  }

  configuring() {
    const pkgJson = {
      name: this.answers.name,
      description: this.answers.description,
      version: this.answers.version,
      private: this.answers.private,
      type: 'module',

      publishConfig: {
        registry: 'http://registry.path',
      },

      scripts: {
        lint: 'run-p lint:*',
      },
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  async installingGlobalDeps() {
    await this.addDevDependencies(['npm-run-all']);
  }

  installing() {
    this.fs.delete(this.destinationPath('package-lock.json'));
    this.spawnCommand('npx', ['-y', 'sort-package-json']);
    this.spawnCommand('yarn', ['install']);
  }

  method1() {
    this.log('app name', this.answers.name);
  }

  method2() {
    this.log('cool feature', this.answers.cool);
  }
};