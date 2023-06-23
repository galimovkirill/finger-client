import type { Meta, StoryObj } from '@storybook/vue3';
import { capitalize } from 'vue';

import SvgIcon from '@/components/SvgIcon.vue';
import IconEye from '@/icons/IconEye.vue';

import BaseChip from '@/components/Base/Chip/BaseChip.vue';
import { BaseChipTypes, BaseChipColors, BaseChipSizes } from '@/components/Base/Chip/BaseChip';

const meta: Meta<typeof BaseChip> = {
    component: BaseChip,
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

type Story = StoryObj<typeof BaseChip>;

export const Types: Story = {
    render: (args) => ({
        components: { BaseChip },

        setup() {
            return { args, BaseChipTypes, capitalize };
        },

        template: `
            <BaseChip>Default</BaseChip>
            <BaseChip v-for="type in BaseChipTypes" :key="type" :type="type">{{ capitalize(type) }}</BaseChip>
        `
    })
};

export const Closable: Story = {
    render: (args) => ({
        components: { BaseChip },

        setup() {
            const onClose = () => {
                alert('Close button click');
            };

            return { args, BaseChipTypes, capitalize, onClose };
        },

        template: `
            <div class="sb-flex-col sb-gap-2">
                <div class="sb-flex sb-gap-2">
                    <BaseChip closable @close="onClose">Default</BaseChip>
                    <BaseChip v-for="type in BaseChipTypes" :key="type" :type="type" closable @close="onClose">
                        {{ capitalize(type) }}
                    </BaseChip>
                </div>

                <div class="sb-flex sb-gap-2">
                    <BaseChip closable close-icon="trash" @close="onClose">Default</BaseChip>
                    <BaseChip v-for="type in BaseChipTypes" :key="type" :type="type" close-icon="trash" closable @close="onClose">
                        {{ capitalize(type) }}
                    </BaseChip>
                </div>
            </div>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { BaseChip },

        setup() {
            return { args, BaseChipColors, capitalize };
        },

        template: `
            <BaseChip v-for="color in BaseChipColors" :key="color" :color="color">
                {{ capitalize(color) }}
            </BaseChip>
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { BaseChip },

        setup() {
            return { args, BaseChipSizes, capitalize };
        },

        template: `
            <BaseChip v-for="size in BaseChipSizes" :key="size" :size="size">
                {{ size }} size
            </BaseChip>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { BaseChip, SvgIcon, IconEye },

        setup() {
            return { args, BaseChipSizes, capitalize };
        },

        template: `
            <BaseChip>
                <template #prepend>
                    <SvgIcon>
                        <IconEye />
                    </SvgIcon>
                </template>

                Prepend icon
            </BaseChip>

            <BaseChip color="primary">
                <template #append>
                    <SvgIcon>
                        <IconEye />
                    </SvgIcon>
                </template>

                Append icon
            </BaseChip>
        `
    })
};
