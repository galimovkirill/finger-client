import type { Meta, StoryObj } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconUser from '@/icons/IconUser.vue';

import { BaseButtonColors, BaseButtonSizes } from '@/components/Base/Button/BaseButton';

import { capitalize } from 'vue';

const meta: Meta<typeof BaseButton> = {
    component: BaseButton,
    title: 'Button',
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const DefaultType: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseButton active>Active</BaseButton>
                <BaseButton>Default</BaseButton>
                <BaseButton disabled>Disabled</BaseButton>
            </div>
        `
    })
};

export const FlatType: Story = {
    args: {
        type: 'flat'
    },

    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseButton v-bind="args" active>Active</BaseButton>
                <BaseButton v-bind="args">Default</BaseButton>
                <BaseButton v-bind="args" disabled>Disabled</BaseButton>
            </div>
        `
    })
};

export const BorderType: Story = {
    args: {
        type: 'border'
    },

    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseButton v-bind="args" active>Active</BaseButton>
                <BaseButton v-bind="args">Default</BaseButton>
                <BaseButton v-bind="args" disabled>Disabled</BaseButton>
            </div>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args, BaseButtonColors, capitalize };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseButton v-for="color in BaseButtonColors" :key="color" :color="color">{{ capitalize(color) }}</BaseButton>
            </div>
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args, BaseButtonSizes, capitalize };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseButton v-for="size in BaseButtonSizes" :key="size" :size="size">{{ capitalize(size) }}</BaseButton>
            </div>
        `
    })
};

export const Loading: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args, BaseButtonSizes };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseButton v-for="size in BaseButtonSizes" :key="size" :size="size" loading />
            </div>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { BaseButton, SvgIcon, IconUser },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex-col sb-items-center sb-justify-center sb-gap-2">
                <BaseButton>
                    <template #prepend>
                        <SvgIcon>
                            <IconUser />    
                        </SvgIcon>
                    </template>
                    
                    Prepend icon
                </BaseButton>

                <BaseButton>
                    <template #append>
                        <SvgIcon>
                            <IconUser />    
                        </SvgIcon>
                    </template>
                    
                    Append icon
                </BaseButton>

                <BaseButton>
                    <SvgIcon>
                        <IconUser />    
                    </SvgIcon>
                </BaseButton>
            </div>
        `
    })
};

export const Expanded: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-justify-center">
                <BaseButton expanded>
                    Expanded button
                </BaseButton>
            </div>
        `
    })
};

export const Uppercase: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-justify-center">
                <BaseButton uppercase>
                    Button
                </BaseButton>
            </div>
        `
    })
};

export const Link: Story = {
    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-justify-center">
                <BaseButton to="https://google.com">
                    Go to Google
                </BaseButton>
            </div>
        `
    })
};
