import {existsSync, readFileSync, writeFileSync} from 'fs';

type ErrorResponse = {
  filePath: string;
  message: {
    ruleId: string;
    severity: string;
    message: string;
    line: number;
    column: number;
    nodeType: string;
    messageId: string;
    endLine: number;
    endColumn: number;
  };
  errorCount: number;
  fatalErrorCount: number;
  warningCount: number;
  fixableErrorCount: number;
  fixableWarningCount: number;
  suppressedMessages: unknown;
  usedDeprecatedRules: unknown;
  source: string;
};

const PROJECT_ROOT = 'eslint-config-valantic';

/**
 * Verifies ESLint error and warning counts and optionally compares with a snapshot.
 * Usage: node verify-test-result.ts <expectedErrors> <expectedWarnings> [snapshotPath]
 */
const [, , expectedErrors, expectedWarnings, snapshotPath] = process.argv;

if (expectedErrors === undefined) {
  console.error('Usage: node verify-test-result.ts <expectedErrors> [expectedWarnings] [snapshotPath]');
  process.exit(1);
}

try {
  // Read from stdin (piped output from eslint --format JSON)
  const input = readFileSync(0, 'utf8');

  if (!input) {
    console.error('No input received on stdin.');
    process.exit(1);
  }

  const errorResponses: ErrorResponse[] = JSON.parse(input);
  const targetErrors: number = Number.parseInt(expectedErrors, 10);
  const targetWarnings: number = expectedWarnings !== undefined ? Number.parseInt(expectedWarnings, 10) : 0;

  let actualErrors: number = 0;
  let actualWarnings: number = 0;

  errorResponses.forEach((item: ErrorResponse) => {
    item.filePath = item.filePath.split(PROJECT_ROOT)[1]; // we need to remove the users project path in order to have it comparable on other devices.
    actualErrors += item.errorCount;
    actualWarnings += item.warningCount;
  });

  let failed: boolean = false;

  // Validate the errors.
  if (actualErrors !== targetErrors) {
    failed = true;

    console.error(`❌ Error count mismatch! Expected: ${targetErrors}, Actual: ${actualErrors}`);
  } else {
    console.log(`✅ Error count matches: ${actualErrors}`);
  }

  // Validate the warnings.
  if (expectedWarnings !== undefined && actualWarnings !== targetWarnings) {
    failed = true;

    console.error(`❌ Warning count mismatch! Expected: ${targetWarnings}, Actual: ${actualWarnings}`);
  } else if (expectedWarnings !== undefined) {
    console.log(`✅ Warning count matches: ${actualWarnings}`);
  }

  // If there is a mismatch, skip the snapshot test.
  if (failed) {
    process.exit(1);
  }

  // Read or update the snapshot.
  if (snapshotPath) {
    const currentResult: string = JSON.stringify(errorResponses, null, 2);

    if (process.env.UPDATE_SNAPSHOTS || !existsSync(snapshotPath)) {
      writeFileSync(snapshotPath, currentResult);

      console.log(`✅ Snapshot updated: ${snapshotPath}`);
    } else {
      const expectedResult = readFileSync(snapshotPath, 'utf8');

      if (currentResult !== expectedResult) {
        failed = true;

        console.log('----->', errorResponses);

        console.error(`❌ Snapshot mismatch for ${snapshotPath}!`);
      } else {
        console.log(`✅ Snapshot matches: ${snapshotPath}`);
      }
    }
  }

  if (failed) {
    process.exit(1); // Script will land in the catch handler.
  } else {
    console.log('');
    console.log('🎉 ESLint check passed with expected results.');
    process.exit(0);
  }
} catch (error) {
  console.error('Failed to parse ESLint JSON output:', error.message);
  process.exit(1);
}
