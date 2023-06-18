import type { Meta, StoryObj } from '@storybook/vue3';

import BaseCounter from '@/components/Base/Counter/BaseCounter.vue';

const meta: Meta<typeof BaseCounter> = {
    component: BaseCounter,
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

type Story = StoryObj<typeof BaseCounter>;

export const Default: Story = {
    render: (args) => ({
        components: { BaseCounter },

        setup() {
            return { args };
        },

        template: `
            <BaseCounter :value="300" />
        `
    })
};
