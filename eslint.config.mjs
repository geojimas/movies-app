// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        rules: {
            'vue/multi-word-component-names': 'off', // Disable the rule that requires multi-word component names in Vue
            // Additional Vue 3 specific rules
            'vue/component-api-style': ['error', ['script-setup', 'composition']], // Enforce specific API style for Vue components
            'vue/component-name-in-template-casing': ['error', 'PascalCase'], // Enforce PascalCase for component names in templates
            'vue/component-options-name-casing': ['error', 'PascalCase'], // Enforce PascalCase for component option names
            'vue/custom-event-name-casing': ['error', 'camelCase'], // Enforce camelCase for custom event names
            'vue/no-deprecated-slot-attribute': 'error', // Disallow the use of deprecated `slot` attribute
            'vue/no-deprecated-v-on-native-modifier': 'error', // Disallow the use of deprecated `v-on: native` modifier
            'vue/no-setup-props-destructure': 'error', // Disallow destructuring of props in setup function
            'vue/no-unused-refs': 'error', // Disallow unused template refs
            'vue/prefer-import-from-vue': 'error', // Prefer importing from Vue directly
            'vue/require-explicit-emits': 'error', // Require explicit emits declarations
            'vue/script-indent': ['error', 2, {baseIndent: 1}], // Enforce consistent indentation for script tags
            'vue/v-on-event-hyphenation': ['error', 'always', {autofix: true}], // Enforce hyphenation for event names in templates
            'vue/valid-define-props': 'error', // Ensure props definitions are valid
            'vue/valid-v-memo': 'error' // Ensure usage of valid v-memo directive
        }
    },
)
