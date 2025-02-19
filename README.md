# Next.js, ESLint, Prettier, and Husky Setup

This guide walks you through setting up Next.js, ESLint, Prettier, and Husky for linting, formatting, and enforcing code standards in your project.

---

## 🛠 Step 1: Create a Next.js Project

Run the following command to create a new Next.js project:

```bash
npx create-next-app@latest
🛠 Step 2: Install Required Dependencies
Run the following command to install ESLint, Prettier, and necessary plugins:

bash
Copy
npm install --save-dev \
  @eslint/eslintrc@^3 @eslint/js@^9.20.0 @next/eslint-plugin-next@^15.1.7 \
  @types/node@^20 @types/react@^19 @types/react-dom@^19 \
  @typescript-eslint/eslint-plugin@^8.24.1 @typescript-eslint/parser@^8.24.1 \
  eslint@^9.20.1 eslint-config-next@15.1.7 eslint-config-prettier@^10.0.1 \
  eslint-plugin-prettier@^5.2.3 eslint-plugin-react@^7.37.4 \
  eslint-plugin-react-hooks@^5.1.0 prettier@^3.5.1
This will install all required ESLint and Prettier dependencies.

🛠 Step 3: Configure ESLint
Create a file named eslint.config.mjs and add the following configuration:

javascript
Copy
// @ts-check
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['node_modules/*', '.next/*', 'build/*', 'public/*', 'dist/*']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    ...eslint.configs.recommended
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: {
      '@typescript-eslint': tseslint,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslintParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly'
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      next: {
        rootDir: '.'
      }
    },
    rules: {
      semi: ['error', 'always'],
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  },
  {
    files: ['*.js', '*.mjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }
];
🛠 Step 4: Create a TypeScript ESLint Config File
Create a new file tsconfig.eslint.json and add the following:

json
Copy
{
  "extends": "./tsconfig.json",
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    "**/*.mjs",
    ".next/types/**/*.ts",
    ".prettierrc.js",
    "tailwind.config.ts"
  ]
}
🛠 Step 5: Configure Prettier
Create a file .prettierrc.js and add the following settings:

javascript
Copy
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
};
🛠 Step 6: Add Scripts to package.json
Add the following scripts inside package.json:

json
Copy
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ."
}
Now, you can use these commands:

npm run lint → Check for linting errors.

npm run lint:fix → Automatically fix linting issues.

npm run format → Format all files using Prettier.

🚀 Husky Setup
🛠 Step 1: Initialize Git
Make sure Git is initialized in your project:

bash
Copy
git init
🛠 Step 2: Install Husky & Lint-Staged
bash
Copy
npm install --save-dev husky lint-staged
npx husky-init
🛠 Step 3: Configure Lint-Staged
Add the following inside package.json:

json
Copy
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md}": [
    "prettier --write"
  ]
}
🛠 Step 4: Modify Husky Pre-Commit Hook
Inside the .husky folder, open the pre-commit file and replace its content with:

bash
Copy
npx lint-staged
This ensures ESLint and Prettier run before every commit.

✅ You’re all set!
Now, every time you commit changes, Husky will automatically run ESLint and Prettier to keep your code clean and formatted!

Copy

This `README.md` file is well-structured and easy to follow. You can copy and paste it into your project's `README.md` file.
