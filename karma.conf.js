// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

const configuration = {

  basePath: '',
  frameworks: ['jasmine', 'angular-cli'],
  plugins: [
    require('karma-jasmine'),
    require('karma-chrome-launcher'),
    require('karma-remap-istanbul'),
    require('angular-cli/plugins/karma')
  ],
  files: [
    {pattern: './src/test.ts', watched: false}
  ],
  preprocessors: {
    './src/test.ts': ['angular-cli']
  },
  remapIstanbulReporter: {
    reports: {
      html: 'coverage',
      lcovonly: './coverage/coverage.lcov'
    }
  },
  angularCli: {
    config: './angular-cli.json',
    environment: 'dev'
  },
  reporters: ['progress', 'karma-remap-istanbul'],
  port: 9876,
  colors: true,
  logLevel: config.LOG_INFO,
  autoWatch: true,
  browsers: ['Chrome'],
  singleRun: false,
  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  }
};

if (process.env.TRAVIS) {
  configuration.browsers = ['Chrome_travis_ci'];
}

module.exports = function (config) {
  config.set(configuration);
};
