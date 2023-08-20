/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'vue/multi-word-component-names': 'off',

        // TODO: try to enable this rule on higher version
        // Works wrong on v9.17.0 (eslint-plugin-vue)
        // Emits declared with typescript interface inside generic calls this error
        "vue/require-explicit-emits": 'off'
    }
};
