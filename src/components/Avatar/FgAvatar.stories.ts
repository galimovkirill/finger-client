import type { Meta, StoryObj } from '@storybook/vue3';

import { FgAvatarColors } from '@/components/Avatar/FgAvatar';
import FgAvatar from '@/components/Avatar/FgAvatar.vue';
import FgAvatarGroup from '@/components/Avatar/FgAvatarGroup.vue';
import SvgIcon from '@/components/SvgIcon.vue';

import IconUser from '@/icons/IconUser.vue';
import IconDashboard from '@/icons/IconDashboard.vue';
import IconLock from '@/icons/IconLock.vue';
import IconGithub from '@/icons/socials/IconGithub.vue';
import IconTelegram from '@/icons/socials/IconTelegram.vue';

const meta: Meta<typeof FgAvatar> = {
    component: FgAvatar,
    title: 'Components/Avatar',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgAvatar>;

export const Default: Story = {
    render: (args) => ({
        components: { FgAvatar, SvgIcon, IconUser },

        setup() {
            return { args };
        },

        template: `
            <FgAvatar>Den</FgAvatar>

            <FgAvatar>Michael</FgAvatar>

            <FgAvatar>Michael Freeman</FgAvatar>
            
            <FgAvatar>
                <SvgIcon>
                    <IconUser />
                </SvgIcon>
            </FgAvatar>

            <FgAvatar>
                <img src="images/avatars/avatar-1.jpg" alt="" />
            </FgAvatar>
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { FgAvatar, SvgIcon, IconUser },

        setup() {
            return { args };
        },

        template: `
            <FgAvatar :size="30">Den</FgAvatar>

            <FgAvatar>Michael</FgAvatar>

            <FgAvatar :size="50">Michael Freeman</FgAvatar>
            
            <FgAvatar :size="60">
                <SvgIcon :width="24">
                    <IconUser />
                </SvgIcon>
            </FgAvatar>

            <FgAvatar :size="70">
                <img src="images/avatars/avatar-1.jpg" alt="" />
            </FgAvatar>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { FgAvatar },

        setup() {
            return { args, FgAvatarColors };
        },

        template: `
            <FgAvatar title="default">Default</FgAvatar>
            <FgAvatar v-for="color in FgAvatarColors" :key="color" :color="color" :title="color">{{ color }}</FgAvatar>
            <FgAvatar title="HEX" color="#42f5b0">HEX</FgAvatar>
            <FgAvatar title="RGB" color="rgb(188, 66, 245)">RGB</FgAvatar>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: {
            FgAvatar,
            SvgIcon,
            IconUser,
            IconDashboard,
            IconLock,
            IconGithub,
            IconTelegram
        },

        setup() {
            const icons = [IconUser, IconDashboard, IconLock, IconGithub, IconTelegram];

            return { args, icons };
        },

        template: `
            <FgAvatar v-for="icon in icons" :key="icon">
                <SvgIcon>
                    <Component :is="icon" />
                </SvgIcon>
            </FgAvatar>
        `
    })
};

export const Group: Story = {
    render: (args) => ({
        components: { FgAvatar, FgAvatarGroup },

        setup() {
            return { args };
        },

        template: `
            <FgAvatarGroup>
                <FgAvatar v-for="avatar in 10" :key="avatar">
                    <img :src="'images/avatars/avatar-' + avatar + '.jpg'" alt="" />
                </FgAvatar>
            </FgAvatarGroup>

            <FgAvatarGroup :max="7">
                <FgAvatar v-for="avatar in 10" :key="avatar">
                    <img :src="'images/avatars/avatar-' + avatar + '.jpg'" alt="" />
                </FgAvatar>
            </FgAvatarGroup>
        `
    }),

    decorators: [
        () => ({
            template:
                '<div class="sb-flex-col sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};
