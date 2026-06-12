# Code Guardrails Documentation

## Overview

This project uses automated git hooks to ensure only properly formatted and bug-free code is committed. These guardrails run automatically before each commit.

## Setup Components

### 1. **Husky** - Git Hooks Manager

- Automatically runs checks before commits
- Ensures code quality standards are met

### 2. **Lint-staged** - Selective Linting

- Runs linters only on files being committed
- Prevents unnecessary checking of unchanged files
- Faster feedback loop

### 3. **ESLint** - Code Quality

- Checks for bugs, best practices, and code smells
- Catches common JavaScript/TypeScript errors
- Auto-fixes issues where possible

### 4. **Prettier** - Code Formatting

- Ensures consistent code style across the project
- Formats code automatically

## Pre-Commit Checks

When you attempt to commit, the following happens automatically:

1. **ESLint Check** - Validates code quality
   - Catches unused variables
   - Detects potential bugs
   - Enforces React best practices
2. **Prettier Format Check** - Ensures consistent formatting
   - Fixes indentation, spacing, semicolons, etc.
   - Maintains uniform code style

3. **Auto-Fix** - Lint-staged automatically fixes issues when possible
   - ESLint auto-fixes enabled
   - Prettier reformats files

## NPM Scripts

### Development Commands

```bash
# Run ESLint on all files
npm run lint

# Check code formatting without modifying
npm run format:check

# Auto-fix and format all files
npm run format

# Run lint-staged (pre-commit hook)
npm run lint:staged
```

## Configuration Files

- `.prettierrc.json` - Prettier formatting rules
- `.prettierignore` - Files to exclude from formatting
- `eslint.config.js` - ESLint rules and settings
- `.husky/pre-commit` - Git hook that runs before each commit

## What Gets Checked

### TypeScript/JavaScript Files (_.ts, _.tsx)

- ESLint for code quality issues
- Prettier for formatting
- TypeScript compilation (via build process)

### Other Files (_.json, _.md, \*.css)

- Prettier for consistent formatting

## Workflow Example

```bash
# 1. Make changes to your code
# Edit src/App.tsx, etc.

# 2. Stage your changes
git add .

# 3. Commit (guardrails automatically run)
git commit -m "Add new feature"

# If issues are found:
# - Auto-fixable issues are corrected
# - You may need to fix some issues manually
# - Try committing again after fixes
```

## Bypassing Guardrails (Not Recommended!)

In emergencies, you can skip pre-commit hooks:

```bash
git commit -m "..." --no-verify
```

⚠️ **Use sparingly** - This defeats the purpose of the guardrails!

## Troubleshooting

### "lint-staged failed" error

- Run `npm run lint` to see detailed errors
- Fix issues manually or run `npm run format` for auto-fixes
- Stage changes again and commit

### Prettier conflicts with ESLint

- The configuration is already optimized to prevent conflicts
- Both tools work together seamlessly

### Pre-commit hook not running

- Ensure Husky is installed: `npm install`
- Husky hooks should be in `.husky/` directory
- Check file permissions on `.husky/pre-commit`

## Best Practices

1. **Format before committing**: Run `npm run format` regularly during development
2. **Run lint check**: Use `npm run lint` to catch issues early
3. **Keep commits focused**: Smaller commits are easier to review and fix
4. **Don't bypass guardrails**: They protect code quality

## CI/CD Integration

These same scripts can be integrated into your CI/CD pipeline to ensure quality at every stage of development.
