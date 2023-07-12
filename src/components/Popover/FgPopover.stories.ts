import type { Meta, StoryObj } from '@storybook/vue3';

import FgPopover from '@/components/Popover/FgPopover.vue';
import FgButtonGroup from '@/components/Button/FgButtonGroup.vue';
import FgButton from '@/components/Button/FgButton.vue';
import FgPopoverDemoContent from '@/components/Popover/FgPopoverDemoContent.vue';
import { FgPopoverAlignments, type FgPopoverProps } from '@/components/Popover/FgPopover';

import { ref } from 'vue';

const meta: Meta<typeof FgPopover> = {
    component: FgPopover,
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

type Story = StoryObj<typeof FgPopover>;

export const Default: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton, FgPopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <FgPopover alignment="bottom">
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <FgPopoverDemoContent />
                </template>
            </FgPopover>
        `
    })
};

export const ContentPadding: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton, FgPopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <FgPopover alignment="bottom" :content-padding="16">
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <FgPopoverDemoContent />
                </template>
            </FgPopover>
        `
    })
};

export const Gap: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton, FgPopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <FgPopover alignment="bottom" :gap="40" trigger="hover">
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <FgPopoverDemoContent />
                </template>
            </FgPopover>
        `
    })
};

export const ContentBorderRadius: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton, FgPopoverDemoContent },

        setup() {
            return { args };
        },

        template: `
            <FgPopover alignment="bottom" :content-border-radius="8">
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <FgPopoverDemoContent />
                </template>
            </FgPopover>
        `
    })
};

export const MaxWidth: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton },

        setup() {
            return { args };
        },

        template: `
            <FgPopover alignment="bottom" :max-width="600">
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio iure voluptas enim, ex repellendus, iste quod rerum inventore cupiditate, voluptatem voluptatibus facilis hic assumenda illo recusandae neque laboriosam autem perspiciatis!</p>
                </template>
            </FgPopover>
        `
    })
};

export const Alignment: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton, FgButtonGroup, FgPopoverDemoContent },

        setup() {
            const activeAlignment = ref<FgPopoverProps['alignment']>('bottom');

            return { args, activeAlignment, FgPopoverAlignments };
        },

        template: `
            <FgButtonGroup>
                <FgButton
                    v-for="alignment in FgPopoverAlignments"
                    :key="alignment"
                    type="flat"
                    :active="activeAlignment === alignment"
                    @click="activeAlignment = alignment"
                >
                    {{ alignment }}
                </FgButton>
            </FgButtonGroup>

            <FgPopover
                :alignment="activeAlignment"
                style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"
            >
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <FgPopoverDemoContent />
                </template>
            </FgPopover>
        `
    })
};

export const Trigger: Story = {
    render: (args) => ({
        components: { FgPopover, FgButton, FgButtonGroup, FgPopoverDemoContent },

        setup() {
            // @ts-ignore
            const triggers: FgPopoverProps['trigger'] = ['click', 'hover'];
            const activeTrigger = ref<typeof triggers>('click');

            return { args, activeTrigger, triggers, FgPopoverAlignments };
        },

        template: `
            <FgButtonGroup>
                <FgButton
                    v-for="trigger in triggers"
                    :key="trigger"
                    type="flat"
                    :active="activeTrigger === trigger"
                    @click="activeTrigger = trigger"
                >
                    {{ trigger }}
                </FgButton>
            </FgButtonGroup>

            <FgPopover
                alignment="bottom"
                :trigger="activeTrigger"
                style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)"
            >
                <template #relative>
                    <FgButton>Show popover</FgButton>
                </template>

                <template #content>
                    <FgPopoverDemoContent />
                </template>
            </FgPopover>
        `
    })
};
