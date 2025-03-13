import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintImport from 'eslint-plugin-import' // ✅ 添加 eslint-plugin-import

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'import': eslintImport, // ✅ 注册 import 插件
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // ✅ 忽略未使用的变量或模块（解决 motion 和 WrappedComponent 的误报）
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^(motion|WrappedComponent)$' 
      }],

      // ✅ 允许匿名导出
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true, allowAnonymousExport: true },
      ],

      // ✅ 允许未使用的模块（解决 motion、WrappedComponent 报错）
      'import/no-unused-modules': [0],

      // ✅ 防止导入未解析的模块（防止动态引入模块报错）
      'import/no-unresolved': 'off',
    },
  },
];
