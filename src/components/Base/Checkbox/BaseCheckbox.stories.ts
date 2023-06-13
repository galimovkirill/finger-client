import type { Meta, StoryObj } from '@storybook/vue3';

import BaseCheckbox from '@/components/Base/Checkbox/BaseCheckbox.vue';
import { BaseCheckboxColors } from '@/components/Base/Checkbox/BaseCheckbox';
import { ref } from 'vue';

const meta: Meta<typeof BaseCheckbox> = {
    component: BaseCheckbox,
    title: 'Checkbox',
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BaseCheckbox>;

export const Default: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseCheckbox id="privacy-policy">
                    I accept the terms of the <a href="#" target="_blank">User Agreement</a>
                </BaseCheckbox>
            </div>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            return { args, BaseCheckboxColors };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-6">
                <BaseCheckbox v-for="color in BaseCheckboxColors" :key="color" :id="color" :color="color">
                    {{ color }}
                </BaseCheckbox>
            </div>
        `
    })
};

export const MultipleChoiceWithPrimitives: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            const strings = ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Angular']
            const selectedStrings = ref<string[]>([])

            return { args, strings, selectedStrings };
        },

        template: `
            <div class="sb-flex sb-flex-col sb-items-center sb-justify-center sb-gap-6">
                <div v-if="selectedStrings.length > 0" class="sb-flex sb-items-center sb-justify-center sb-gap-6">
                    Selected values:

                    <span v-for="string in selectedStrings" :key="string">
                        {{ string }}
                    </span>
                </div>

                <div class="sb-flex sb-items-center sb-justify-center sb-gap-6">
                    <BaseCheckbox v-model="selectedStrings" v-for="string in strings" :key="string" :id="string" :value="string">
                        {{ string }}
                    </BaseCheckbox>
                </div>
            </div>
        `
    })
};
