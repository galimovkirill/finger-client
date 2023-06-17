import type { Meta, StoryObj } from '@storybook/vue3';

import BasePopover from '@/components/Base/Popover/BasePopover.vue';
import BaseButtonGroup from '@/components/Base/Button/BaseButtonGroup.vue';
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import BasePopoverDemoContent from '@/components/Base/Popover/BasePopoverDemoContent.vue';
import {
    BasePopoverAlignments,
    type BasePopoverProps
} from '@/components/Base/Popover/BasePopover';

import { ref } from 'vue';

const meta: Meta<typeof BasePopover> = {
    component: BasePopover,
    title: 'Components/Popover',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex-col sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof BasePopover>;

export const Default: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton, BasePopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <BasePopover alignment="bottom">
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <BasePopoverDemoContent />
                </template>
            </BasePopover>
        `
    })
};

export const ContentPadding: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton, BasePopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <BasePopover alignment="bottom" :content-padding="16">
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <BasePopoverDemoContent />
                </template>
            </BasePopover>
        `
    })
};

export const Gap: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton, BasePopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <BasePopover alignment="bottom" :gap="40" trigger="hover">
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <BasePopoverDemoContent />
                </template>
            </BasePopover>
        `
    })
};

export const ContentBorderRadius: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton, BasePopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <BasePopover alignment="bottom" :content-border-radius="8">
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <BasePopoverDemoContent />
                </template>
            </BasePopover>
        `
    })
};

export const MaxWidth: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton },

        setup() {
            return { args };
        },

        template: `
            <BasePopover alignment="bottom" :max-width="600">
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptas enim, ex repellendus, iste quod rerum inventore cupiditate, voluptatem voluptatibus facilis hic assumenda illo recusandae neque laboriosam autem perspiciatis!</p>
                </template>
            </BasePopover>
        `
    })
};

export const Alignment: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton, BaseButtonGroup, BasePopoverDemoContent },

        setup() {
            // @ts-ignore
            const activeAlignment: BasePopoverProps['alignment'] = ref('bottom');

            return { args, activeAlignment, BasePopoverAlignments };
        },

        template: `
            <BaseButtonGroup>
                <BaseButton
                    v-for="alignment in BasePopoverAlignments"
                    :key="alignment"
                    type="flat"
                    :active="activeAlignment === alignment"
                    @click="activeAlignment = alignment"
                >
                    {{ alignment }}
                </BaseButton>
            </BaseButtonGroup>

            <BasePopover
                :alignment="activeAlignment"
                style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"
            >
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <BasePopoverDemoContent />
                </template>
            </BasePopover>
        `
    })
};

export const Trigger: Story = {
    render: (args) => ({
        components: { BasePopover, BaseButton, BaseButtonGroup, BasePopoverDemoContent },

        setup() {
            // @ts-ignore
            const triggers: BasePopoverProps['trigger'] = ['click', 'hover'];
            // @ts-ignore
            const activeTrigger: typeof triggers = ref('click');

            return { args, activeTrigger, triggers, BasePopoverAlignments };
        },

        template: `
            <BaseButtonGroup>
                <BaseButton
                    v-for="trigger in triggers"
                    :key="trigger"
                    type="flat"
                    :active="activeTrigger === trigger"
                    @click="activeTrigger = trigger"
                >
                    {{ trigger }}
                </BaseButton>
            </BaseButtonGroup>

            <BasePopover
                alignment="bottom"
                :trigger="activeTrigger"
                style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"
            >
                <template #relative>
                    <BaseButton>Show popover</BaseButton>
                </template>

                <template #content>
                    <BasePopoverDemoContent />
                </template>
            </BasePopover>
        `
    })
};
