import type { Meta, StoryObj } from '@storybook/vue3';

import FgCheckbox from '@/components/Checkbox/FgCheckbox.vue';
import { FgCheckboxColors } from '@/components/Checkbox/FgCheckbox';
import { ref } from 'vue';

const meta: Meta<typeof FgCheckbox> = {
    component: FgCheckbox,
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex-col sb-items-center sb-justify-center sb-gap-2"><story/></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgCheckbox>;

export const Default: Story = {
    render: (args) => ({
        components: { FgCheckbox },

        setup() {
            return { args };
        },

        template: `
            <FgCheckbox id="privacy-policy">
                I accept the terms of the User Agreement
            </FgCheckbox>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { FgCheckbox },

        setup() {
            return { args, FgCheckboxColors };
        },

        template: `
            <FgCheckbox v-for="color in FgCheckboxColors" :key="color" :id="color" :color="color">
                {{ color }}
            </FgCheckbox>
        `
    })
};

export const MultipleChoiceWithPrimitives: Story = {
    render: (args) => ({
        components: { FgCheckbox },

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
                <FgCheckbox v-model="selectedStrings" v-for="string in strings" :key="string" :id="string" :value="string">
                    {{ string }}
                </FgCheckbox>
            </div>
        `
    })
};

export const MultipleChoiceWithObjects: Story = {
    render: (args) => ({
        components: { FgCheckbox },

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
                <FgCheckbox v-model="selectedObjects" v-for="object in objects" :key="object.id" :id="object.id" :value="object">
                    {{ object }}
                </FgCheckbox>
            </div>
        `
    })
};

export const LabelBefore: Story = {
    render: (args) => ({
        components: { FgCheckbox },

        setup() {
            return { args };
        },

        template: `
            <FgCheckbox id="default-label">
                Default label
            </FgCheckbox>

            <FgCheckbox label-before id="label-before">
                Label Before
            </FgCheckbox>
        `
    })
};
