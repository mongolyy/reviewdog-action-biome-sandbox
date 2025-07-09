# reviewdog-action-biome-sandbox

Test repository for reproducing issue #98 from [mongolyy/reviewdog-action-biome](https://github.com/mongolyy/reviewdog-action-biome/issues/98).

## Issue Description

This repository reproduces a problem where biome warnings are treated as errors in GitHub Actions despite being configured as warnings in `biome.json`.

## Reproduction Setup

- **biome.json**: Contains rules configured with `"level": "warn"` for certain linting rules
- **GitHub Actions**: Uses `fail_level: error` and `reporter: github-check` 
- **Test files**: `index.js` and `simple-warnings.js` contain code that triggers the configured warnings

## Expected vs Actual Behavior

**Expected**: Rules configured as `"warn"` in biome.json should not cause the GitHub Actions workflow to fail

**Actual**: The workflow fails even for warnings when `fail_level: error` is set

## Testing Locally

```bash
npx @biomejs/biome check index.js --reporter=json
```

This should show warnings for:
- `useNamingConvention` (snake_case variables)
- `noUnusedVariables` (unused variables)
- `noConsole` errors for disallowed console methods
