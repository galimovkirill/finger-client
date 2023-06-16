import type { Meta, StoryObj } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';
import BaseButtonGroup from '@/components/Base/Button/BaseButtonGroup.vue';

import SvgIcon from '@/components/SvgIcon.vue';

import IconUser from '@/icons/IconUser.vue';

import IconPlay from '@/icons/media/IconPlay.vue';
import IconPause from '@/icons/media/IconPause.vue';
import IconFastForward from '@/icons/media/IconFastForward.vue';
import IconShuffle from '@/icons/media/IconShuffle.vue';

import { BaseButtonColors, BaseButtonSizes } from '@/components/Base/Button/BaseButton';

import { capitalize } from 'vue';

const meta: Meta<typeof BaseButton> = {
    component: BaseButton,
    title: 'Button',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
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
            <BaseButton active>Active</BaseButton>
            <BaseButton>Default</BaseButton>
            <BaseButton disabled>Disabled</BaseButton>
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
            <BaseButton v-bind="args" active>Active</BaseButton>
            <BaseButton v-bind="args">Default</BaseButton>
            <BaseButton v-bind="args" disabled>Disabled</BaseButton>
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
            <BaseButton v-bind="args" active>Active</BaseButton>
            <BaseButton v-bind="args">Default</BaseButton>
            <BaseButton v-bind="args" disabled>Disabled</BaseButton>
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
            <BaseButton v-for="color in BaseButtonColors" :key="color" :color="color">{{ capitalize(color) }}</BaseButton>
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
            <BaseButton v-for="size in BaseButtonSizes" :key="size" :size="size">{{ capitalize(size) }}</BaseButton>
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
            <BaseButton v-for="size in BaseButtonSizes" :key="size" :size="size" loading>Loading</BaseButton>
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
            <BaseButton expanded>
                Expanded button
            </BaseButton>
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
            <BaseButton uppercase>
                Button
            </BaseButton>
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
            <BaseButton to="https://google.com">
                Go to Google
            </BaseButton>
        `
    })
};

export const Group: Story = {
    render: (args) => ({
        components: {
            BaseButton,
            BaseButtonGroup,
            SvgIcon,
            IconPlay,
            IconPause,
            IconFastForward,
            IconShuffle
        },

        setup() {
            return { args };
        },

        template: `
            <BaseButtonGroup>
                <BaseButton type="flat">
                    <SvgIcon>
                        <IconPlay />    
                    </SvgIcon>
                </BaseButton>
                
                <BaseButton type="flat">
                    <SvgIcon>
                        <IconPause />    
                    </SvgIcon>
                </BaseButton>

                <BaseButton type="flat">
                    <SvgIcon>
                        <IconFastForward />    
                    </SvgIcon>
                </BaseButton>

                <BaseButton type="flat">
                    <SvgIcon>
                        <IconShuffle />    
                    </SvgIcon>
                </BaseButton>
            </BaseButtonGroup>

            <BaseButtonGroup>
                <BaseButton>
                    One
                </BaseButton>
                
                <BaseButton>
                    Two
                </BaseButton>

                <BaseButton>
                    Three
                </BaseButton>

                <BaseButton>
                    Four
                </BaseButton>
            </BaseButtonGroup>

            <BaseButtonGroup>
                <BaseButton type="border">
                    One
                </BaseButton>
                
                <BaseButton type="border">
                    Two
                </BaseButton>

                <BaseButton type="border">
                    Three
                </BaseButton>

                <BaseButton type="border">
                    Four
                </BaseButton>
            </BaseButtonGroup>
        `
    })
};
