import type { Meta, StoryObj } from '@storybook/vue3';

import BaseSelect from '@/components/Base/Select/BaseSelect.vue';
import { ref } from 'vue';

const plainList = ['Typescript', 'JavaScript', 'HTML', 'CSS', 'Vue', 'Angular', 'React'];

// TODO: Escape ts-ignore. Storybook is not compatible with generic Vue components yet

const meta: Meta<typeof BaseSelect> = {
    // @ts-ignore
    component: BaseSelect,
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

type Story = StoryObj<typeof BaseSelect>;

export const Default: Story = {
    // @ts-ignore
    render: (args) => ({
        components: { BaseSelect },

        setup() {
            const selectedOption = ref('');

            return { args, plainList, selectedOption };
        },

        template: `
            <BaseSelect v-model="selectedOption" :options="plainList" placeholder="Languages" />
        `
    })
};

export const PlaceholderAsLabel: Story = {
    // @ts-ignore
    render: (args) => ({
        components: { BaseSelect },

        setup() {
            const selectedOption = ref('');

            return { args, plainList, selectedOption };
        },

        template: `
            <BaseSelect v-model="selectedOption" :options="plainList" placeholder="Languages" placeholder-as-label />
        `
    })
};
