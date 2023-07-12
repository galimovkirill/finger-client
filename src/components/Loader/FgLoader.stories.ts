import type { Meta, StoryObj } from '@storybook/vue3';

import FgLoader from '@/components/Loader/FgLoader.vue';

const meta: Meta<typeof FgLoader> = {
    component: FgLoader,
    title: 'Components/Loader',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgLoader>;

export const Default: Story = {
    render: (args) => ({
        components: { FgLoader },

        setup() {
            return { args };
        },

        template: `
            <FgLoader />
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { FgLoader },

        setup() {
            return { args };
        },

        template: `
            <FgLoader size="40px" width="6px" />
        `
    })
};
