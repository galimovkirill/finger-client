import type { Meta, StoryObj } from '@storybook/vue3';

import FgButton from './FgButton.vue';
import FgButtonGroup from '@/components/Button/FgButtonGroup.vue';

import SvgIcon from '@/components/SvgIcon.vue';

import IconUser from '@/icons/IconUser.vue';

import IconPlay from '@/icons/media/IconPlay.vue';
import IconPause from '@/icons/media/IconPause.vue';
import IconFastForward from '@/icons/media/IconFastForward.vue';
import IconShuffle from '@/icons/media/IconShuffle.vue';

import { FgButtonColors, FgButtonSizes } from '@/components/Button/FgButton';

import { capitalize } from 'vue';

const meta: Meta<typeof FgButton> = {
    component: FgButton,
    title: 'Components/Button',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgButton>;

export const DefaultType: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton active>Active</FgButton>
            <FgButton>Default</FgButton>
            <FgButton disabled>Disabled</FgButton>
        `
    })
};

export const FlatType: Story = {
    args: {
        type: 'flat'
    },

    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton v-bind="args" active>Active</FgButton>
            <FgButton v-bind="args">Default</FgButton>
            <FgButton v-bind="args" disabled>Disabled</FgButton>
        `
    })
};

export const BorderType: Story = {
    args: {
        type: 'border'
    },

    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton v-bind="args" active>Active</FgButton>
            <FgButton v-bind="args">Default</FgButton>
            <FgButton v-bind="args" disabled>Disabled</FgButton>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args, FgButtonColors, capitalize };
        },

        template: `
            <FgButton v-for="color in FgButtonColors" :key="color" :color="color">{{ capitalize(color) }}</FgButton>
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args, FgButtonSizes, capitalize };
        },

        template: `
            <FgButton v-for="size in FgButtonSizes" :key="size" :size="size">{{ capitalize(size) }}</FgButton>
        `
    })
};

export const Loading: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args, FgButtonSizes };
        },

        template: `
            <FgButton v-for="size in FgButtonSizes" :key="size" :size="size" loading>Loading</FgButton>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { FgButton, SvgIcon, IconUser },

        setup() {
            return { args };
        },

        template: `
            <FgButton>
                <template #prepend>
                    <SvgIcon>
                        <IconUser />    
                    </SvgIcon>
                </template>
                
                Prepend icon
            </FgButton>

            <FgButton>
                <template #append>
                    <SvgIcon>
                        <IconUser />    
                    </SvgIcon>
                </template>
                
                Append icon
            </FgButton>

            <FgButton>
                <SvgIcon>
                    <IconUser />    
                </SvgIcon>
            </FgButton>
        `
    })
};

export const Expanded: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton expanded>
                Expanded button
            </FgButton>
        `
    })
};

export const Square: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton v-for="item in 10" :key="item" square type="flat">{{ item }}</FgButton>
        `
    })
};


export const Uppercase: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton uppercase>
                Button
            </FgButton>
        `
    })
};

export const Link: Story = {
    render: (args) => ({
        components: { FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgButton to="https://google.com">
                Go to Google
            </FgButton>
        `
    })
};

export const Group: Story = {
    render: (args) => ({
        components: {
            FgButton,
            FgButtonGroup,
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
            <FgButtonGroup>
                <FgButton type="flat">
                    <SvgIcon>
                        <IconPlay />    
                    </SvgIcon>
                </FgButton>
                
                <FgButton type="flat">
                    <SvgIcon>
                        <IconPause />    
                    </SvgIcon>
                </FgButton>

                <FgButton type="flat">
                    <SvgIcon>
                        <IconFastForward />    
                    </SvgIcon>
                </FgButton>

                <FgButton type="flat">
                    <SvgIcon>
                        <IconShuffle />    
                    </SvgIcon>
                </FgButton>
            </FgButtonGroup>

            <FgButtonGroup>
                <FgButton>
                    One
                </FgButton>
                
                <FgButton>
                    Two
                </FgButton>

                <FgButton>
                    Three
                </FgButton>

                <FgButton>
                    Four
                </FgButton>
            </FgButtonGroup>

            <FgButtonGroup>
                <FgButton type="border">
                    One
                </FgButton>
                
                <FgButton type="border">
                    Two
                </FgButton>

                <FgButton type="border">
                    Three
                </FgButton>

                <FgButton type="border">
                    Four
                </FgButton>
            </FgButtonGroup>
        `
    })
};
