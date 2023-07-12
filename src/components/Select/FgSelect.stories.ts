import type { Meta, StoryObj } from '@storybook/vue3';

import FgSelect from '@/components/Select/FgSelect.vue';
import { ref } from 'vue';

const plainList = ['Typescript', 'JavaScript', 'HTML', 'CSS', 'Vue', 'Angular', 'React'];

// TODO: Escape ts-ignore. Storybook is not compatible with generic Vue components yet

const meta: Meta<typeof FgSelect> = {
    // @ts-ignore
    component: FgSelect,
    title: 'Components/Select',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2" style="max-width: 300px; margin: 32px auto;"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgSelect>;

export const Default: Story = {
    // @ts-ignore
    render: (args) => ({
        components: { FgSelect },

        setup() {
            const selectedOption = ref('');

            return { args, plainList, selectedOption };
        },

        template: `
            <FgSelect v-model="selectedOption" :options="plainList" placeholder="Languages" />
        `
    })
};

export const PlaceholderAsLabel: Story = {
    // @ts-ignore
    render: (args) => ({
        components: { FgSelect },

        setup() {
            const selectedOption = ref('');

            return { args, plainList, selectedOption };
        },

        template: `
            <FgSelect v-model="selectedOption" :options="plainList" placeholder="Languages" placeholder-as-label />
        `
    })
};
