import type { Meta, StoryObj } from '@storybook/vue3';

import BaseCheckbox from '@/components/Base/Checkbox/BaseCheckbox.vue';
import { BaseCheckboxColors } from '@/components/Base/Checkbox/BaseCheckbox';
import { ref } from 'vue';

const meta: Meta<typeof BaseCheckbox> = {
    component: BaseCheckbox,
    title: 'Checkbox',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story/></div>>'
        })
    ]
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
            <BaseCheckbox id="privacy-policy">
                I accept the terms of the <a href="#" target="_blank">User Agreement</a>
            </BaseCheckbox>
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
            <BaseCheckbox v-for="color in BaseCheckboxColors" :key="color" :id="color" :color="color">
                {{ color }}
            </BaseCheckbox>
        `
    })
};

export const MultipleChoiceWithPrimitives: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            const strings = ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Angular'];
            const selectedStrings = ref<string[]>([]);

            return { args, strings, selectedStrings };
        },

        template: `
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
        `
    })
};

export const MultipleChoiceWithObjects: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            interface Object {
                id: number;
                title: string;
            }

            const objects: Object[] = [
                { id: 0, title: 'Telegram' },
                { id: 1, title: 'Facebook' },
                { id: 2, title: 'Discord' }
            ];
            const selectedObjects = ref<string[]>([]);

            return { args, objects, selectedObjects };
        },

        template: `
            <div v-if="selectedObjects.length > 0" class="sb-flex sb-items-center sb-justify-center sb-gap-6">
                Selected objects:

                <span v-for="object in selectedObjects" :key="object.id">
                    {{ object }}
                </span>
            </div>

            <div class="sb-flex sb-items-center sb-justify-center sb-gap-6">
                <BaseCheckbox v-model="selectedObjects" v-for="object in objects" :key="object.id" :id="object.id" :value="object">
                    {{ object }}
                </BaseCheckbox>
            </div>
        `
    })
};

export const LabelBefore: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            return { args };
        },

        template: `
            <BaseCheckbox id="default-label">
                Default label
            </BaseCheckbox>

            <BaseCheckbox label-before id="label-before">
                Label Before
            </BaseCheckbox>
        `
    })
};
