import type { Meta, StoryObj } from '@storybook/vue3';

import { BaseAvatarColors } from '@/components/Base/Avatar/BaseAvatar';
import BaseAvatar from '@/components/Base/Avatar/BaseAvatar.vue';
import BaseAvatarGroup from '@/components/Base/Avatar/BaseAvatarGroup.vue';
import SvgIcon from '@/components/SvgIcon.vue';

import IconUser from '@/icons/IconUser.vue';
import IconDashboard from '@/icons/IconDashboard.vue';
import IconLock from '@/icons/IconLock.vue';
import IconGithub from '@/icons/socials/IconGithub.vue';
import IconTelegram from '@/icons/socials/IconTelegram.vue';

const meta: Meta<typeof BaseAvatar> = {
    component: BaseAvatar,
    title: 'Avatar',
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BaseAvatar>;

export const Default: Story = {
    render: (args) => ({
        components: { BaseAvatar, SvgIcon, IconUser },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseAvatar>Den</BaseAvatar>

                <BaseAvatar>Michael</BaseAvatar>

                <BaseAvatar>Michael Freeman</BaseAvatar>
                
                <BaseAvatar>
                    <SvgIcon>
                        <IconUser />
                    </SvgIcon>
                </BaseAvatar>

                <BaseAvatar>
                    <img src="images/avatars/avatar-1.jpg" alt="" />
                </BaseAvatar>
            </div>
        `
    })
};

export const Size: Story = {
    render: (args) => ({
        components: { BaseAvatar, SvgIcon, IconUser },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseAvatar :size="30">Den</BaseAvatar>

                <BaseAvatar>Michael</BaseAvatar>

                <BaseAvatar :size="50">Michael Freeman</BaseAvatar>
                
                <BaseAvatar :size="60">
                    <SvgIcon :width="24">
                        <IconUser />
                    </SvgIcon>
                </BaseAvatar>

                <BaseAvatar :size="70">
                    <img src="images/avatars/avatar-1.jpg" alt="" />
                </BaseAvatar>
            </div>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { BaseAvatar },

        setup() {
            return { args, BaseAvatarColors };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseAvatar title="default">Default</BaseAvatar>
                <BaseAvatar v-for="color in BaseAvatarColors" :key="color" :color="color" :title="color">{{ color }}</BaseAvatar>
                <BaseAvatar title="HEX" color="#42f5b0">HEX</BaseAvatar>
                <BaseAvatar title="RGB" color="rgb(188, 66, 245)">RGB</BaseAvatar>
            </div>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: {
            BaseAvatar,
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
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseAvatar v-for="icon in icons" :key="icon">
                    <SvgIcon>
                        <Component :is="icon" />
                    </SvgIcon>
                </BaseAvatar>
            </div>
        `
    })
};

export const Group: Story = {
    render: (args) => ({
        components: { BaseAvatar, BaseAvatarGroup },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-flex-col sb-items-center sb-justify-center sb-gap-2">
                <BaseAvatarGroup>
                    <BaseAvatar v-for="avatar in 10" :key="avatar">
                        <img :src="'images/avatars/avatar-' + avatar + '.jpg'" alt="" />
                    </BaseAvatar>
                </BaseAvatarGroup>

                <BaseAvatarGroup :max="7">
                    <BaseAvatar v-for="avatar in 10" :key="avatar">
                        <img :src="'images/avatars/avatar-' + avatar + '.jpg'" alt="" />
                    </BaseAvatar>
                </BaseAvatarGroup>
            </div>
        `
    })
};
