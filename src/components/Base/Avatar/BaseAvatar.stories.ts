import type { Meta, StoryObj } from '@storybook/vue3';

import { BaseAvatarColors } from '@/components/Base/Avatar/BaseAvatar';
import BaseAvatar from '@/components/Base/Avatar/BaseAvatar.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconUser from '@/icons/IconUser.vue';

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
                    <img src="https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg" alt="" />
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
                    <img src="https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg" alt="" />
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
