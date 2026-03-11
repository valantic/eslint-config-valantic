import {readFileSync} from 'fs';

/**
 * Verifies ESLint error and warning counts.
 * Usage: node verify-eslint-counts.js <expectedErrors> <expectedWarnings>
 */
const [, , expectedErrors, expectedWarnings] = process.argv;

if (expectedErrors === undefined) {
    console.error('Usage: node verify-eslint-counts.js <expectedErrors> [expectedWarnings]');
    process.exit(1);
}

try {
    // Read from stdin (piped output from eslint --format json)
    const input = readFileSync(0, 'utf8');

    if (!input) {
        console.error('No input received on stdin.');
        process.exit(1);
    }

    const results = JSON.parse(input);
    const targetErrors = Number.parseInt(expectedErrors, 10);
    const targetWarnings = expectedWarnings !== undefined ? Number.parseInt(expectedWarnings, 10) : 0;

    let actualErrors = 0;
    let actualWarnings = 0;

    results.forEach((file) => {
        actualErrors += file.errorCount;
        actualWarnings += file.warningCount;
    });

    let failed = false;

    if (actualErrors !== targetErrors) {
        console.error(`❌ Error count mismatch! Expected: ${targetErrors}, Actual: ${actualErrors}`);
        failed = true;
    } else {
        console.log(`✅ Error count matches: ${actualErrors}`);
    }

    if (expectedWarnings !== undefined && actualWarnings !== targetWarnings) {
        console.error(`❌ Warning count mismatch! Expected: ${targetWarnings}, Actual: ${actualWarnings}`);
        failed = true;
    } else if (expectedWarnings !== undefined) {
        console.log(`✅ Warning count matches: ${actualWarnings}`);
    }

    if (failed) {
        process.exit(1);
    } else {
        console.log('🎉 ESLint check passed with expected results.');
        process.exit(0);
    }
} catch (error) {
    console.error('Failed to parse ESLint JSON output:', error.message);
    process.exit(1);
}
