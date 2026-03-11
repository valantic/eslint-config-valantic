import {execSync} from 'node:child_process';
// @ts-ignore
import process from 'node:process';

/**
 * ATTENTION:
 * This is a test, I usually would solve this with a bash script but wanted to see how this could be done with node and JavaScript.
 */
const TEST_CONFIG = {
  js: {
    testFile: 'tests/test-javascript.js',
    lintConfig: 'index.js',
    expectedErrors: 45,
    expectedWarnings: 1,
    snapshotFile: 'snapshots/js-snapshot.json'
  },
  ts: {
    testFile: 'tests/test-typescript.ts',
    lintConfig: 'typescript.js',
    expectedErrors: 12,
    expectedWarnings: 0,
    snapshotFile: 'snapshots/ts-snapshot.json'
  },
  vue: {
    testFile: 'tests/test-vue.vue',
    lintConfig: 'vue.js',
    expectedErrors: 5,
    expectedWarnings: 1,
    snapshotFile: 'snapshots/vue-snapshot.json'
  },
};
const ALLOWED_TYPES: string[] = Object.keys(TEST_CONFIG);
const ALLOWED_MODES: string[] = ['snapshot', 'raw', 'ci'];

const type: string = process.argv.at(2) || 'unknown'; // eg. js, ts
const mode: string = process.argv.at(3) || 'snapshot'; // eg. raw, ci

try {
  if (!ALLOWED_TYPES.includes(type)) {
    console.error(`Unknown test type: ${type}`);
    process.exit(1);
  }

  if (!ALLOWED_MODES.includes(mode)) {
    console.error(`Unknown test mode: ${mode}`);
    process.exit(1);
  }

  // Find the right config for the given type.
  const config = TEST_CONFIG[type];

  if (!config) {
    console.error(`Config not found for type: ${type}`);
    process.exit(1);
  }

  // Define the output format.
  const outputFormat: string = mode !== 'raw' ? ' --format json' : '';

  // Define where to store the snapshots.
  const modesWithDisabledSnapshots: string[] = ['raw', 'ci'];
  const snapshotLocation: string = modesWithDisabledSnapshots.includes(mode) ? '' : config.snapshotFile;

  // Define commands
  const eslintCommand = 'npx eslint';
  const resultVerifyCommand = 'node test-result-verify.ts';
  const commandWithOutput = `${eslintCommand} ${config.testFile} --config ${config.lintConfig}${outputFormat}`;
  const commandToTestResult = `${resultVerifyCommand} ${config.expectedErrors} ${config.expectedWarnings}`

  let command: string;

  if (mode === 'raw') {
    command = commandWithOutput;
  } else if (mode === 'ci') {
    command = `${commandWithOutput} | ${commandToTestResult}`;
  } else if (mode === 'snapshot') {
    command = `${commandWithOutput} | ${commandToTestResult} ${snapshotLocation}`;
  }

  const headline = `> Test the linting rules for: ${type}`;
  const separator = Array.from({length: headline.length}).map(() => '=').join('');

  console.log(separator);
  console.log(headline);
  console.log(separator);
  console.log('');
  console.log(command);
  console.log('');

  execSync(command, {stdio: 'inherit'});
} catch (error) {
  process.exit(mode === 'raw' ? 0 : 1);
} finally {
  console.log('');
  console.log('');
}
