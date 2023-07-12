import type { Meta, StoryObj } from '@storybook/vue3';
import { capitalize } from 'vue';

import SvgIcon from '@/components/SvgIcon.vue';
import IconEye from '@/icons/IconEye.vue';

import FgChip from '@/components/Chip/FgChip.vue';
import { FgChipTypes, FgChipColors, FgChipSizes } from '@/components/Chip/FgChip';

const meta: Meta<typeof FgChip> = {
    component: FgChip,
    title: 'Components/Chip',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgChip>;

export const Types: Story = {
    render: (args) => ({
        components: { FgChip },

        setup() {
            return { args, FgChipTypes, capitalize };
        },

        template: `
            <FgChip>Default</FgChip>
            <FgChip v-for="type in FgChipTypes" :key="type" :type="type">{{ capitalize(type) }}</FgChip>
        `
    })
};

export const Closable: Story = {
    render: (args) => ({
        components: { FgChip },

        setup() {
            const onClose = () => {
                alert('Close button click');
            };

            return { args, FgChipTypes, capitalize, onClose };
        },

        template: `
            <div class="sb-flex-col sb-gap-2">
                <div class="sb-flex sb-gap-2">
                    <FgChip closable @close="onClose">Default</FgChip>
                    <FgChip v-for="type in FgChipTypes" :key="type" :type="type" closable @close="onClose">
                        {{ capitalize(type) }}
                    </FgChip>
                </div>

                <div class="sb-flex sb-gap-2">
                    <FgChip closable close-icon="trash" @close="onClose">Default</FgChip>
                    <FgChip v-for="type in FgChipTypes" :key="type" :type="type" close-icon="trash" closable @close="onClose">
                        {{ capitalize(type) }}
                    </FgChip>
                </div>
            </div>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { FgChip },

        setup() {
            return { args, FgChipColors, capitalize };
        },

        template: `
            <FgChip v-for="color in FgChipColors" :key="color" :color="color">
                {{ capitalize(color) }}
            </FgChip>
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { FgChip },

        setup() {
            return { args, FgChipSizes, capitalize };
        },

        template: `
            <FgChip v-for="size in FgChipSizes" :key="size" :size="size">
                {{ size }} size
            </FgChip>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { FgChip, SvgIcon, IconEye },

        setup() {
            return { args, FgChipSizes, capitalize };
        },

        template: `
            <FgChip>
                <template #prepend>
                    <SvgIcon>
                        <IconEye />
                    </SvgIcon>
                </template>

                Prepend icon
            </FgChip>

            <FgChip color="primary">
                <template #append>
                    <SvgIcon>
                        <IconEye />
                    </SvgIcon>
                </template>

                Append icon
            </FgChip>
        `
    })
};
