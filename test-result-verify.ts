import {existsSync, readFileSync, writeFileSync} from 'fs';

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

  const results: Record<string, any> = JSON.parse(input);
  const targetErrors: number = Number.parseInt(expectedErrors, 10);
  const targetWarnings: number = expectedWarnings !== undefined ? Number.parseInt(expectedWarnings, 10) : 0;

  let actualErrors: number = 0;
  let actualWarnings: number = 0;

  results.forEach((row: Record<string, number>) => {
    actualErrors += row.errorCount;
    actualWarnings += row.warningCount;
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
    const currentResult: string = JSON.stringify(results, null, 2);

    if (process.env.UPDATE_SNAPSHOTS || !existsSync(snapshotPath)) {
      writeFileSync(snapshotPath, currentResult);

      console.log(`✅ Snapshot updated: ${snapshotPath}`);
    } else {
      const expectedResult = readFileSync(snapshotPath, 'utf8');

      if (currentResult !== expectedResult) {
        failed = true;

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
