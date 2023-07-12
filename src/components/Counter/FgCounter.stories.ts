import type { Meta, StoryObj } from '@storybook/vue3';

import FgCounter from '@/components/Counter/FgCounter.vue';

const meta: Meta<typeof FgCounter> = {
    component: FgCounter,
    title: 'Components/Counter',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgCounter>;

export const Default: Story = {
    render: (args) => ({
        components: { FgCounter },

        setup() {
            return { args };
        },

        template: `
            <FgCounter :value="300" />
        `
    })
};
