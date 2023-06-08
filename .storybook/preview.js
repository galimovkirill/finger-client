import '../src/assets/styles/global.scss';
import '../src/assets/styles/storybook.scss';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
