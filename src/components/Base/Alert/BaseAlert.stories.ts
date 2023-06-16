import type { Meta, StoryObj } from '@storybook/vue3';

import SvgIcon from '@/components/SvgIcon.vue';
import IconTravel from '@/icons/IconTravel.vue';

import BaseButton from '@/components/Base/Button/BaseButton.vue';

import BaseAlert from '@/components/Base/Alert/BaseAlert.vue';
import { BaseAlertColors } from '@/components/Base/Alert/BaseAlert';

const meta: Meta<typeof BaseAlert> = {
    component: BaseAlert,
    title: 'Components/Alert',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex-col sb-items-center sb-justify-center sb-gap-2 sb-mx-auto" style="max-width: 700px;"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof BaseAlert>;

const alertHeading = 'Bill Gates';

const alertText =
    'William Henry Gates III (born October 28, 1955) is an American business magnate, investor, and philanthropist. He is best known for co-founding software giant Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being its largest individual shareholder until May 2014.';

export const Default: Story = {
    render: (args) => ({
        components: { BaseAlert },

        setup() {
            return { args, alertHeading, alertText };
        },

        template: `
            <BaseAlert>
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </BaseAlert>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { BaseAlert },

        setup() {
            return { args, alertHeading, alertText, BaseAlertColors };
        },

        template: `
            <BaseAlert v-for="color in BaseAlertColors" :key="color" :color="color">
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </BaseAlert>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { BaseAlert, SvgIcon, IconTravel, BaseButton },

        setup() {
            return { args, alertHeading, alertText };
        },

        template: `
            <BaseAlert>
                <template #prepend>
                    <SvgIcon :width="24">
                        <IconTravel />
                    </SvgIcon>
                </template>

                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </BaseAlert>
        `
    })
};

export const CloseButton: Story = {
    render: (args) => ({
        components: { BaseAlert },

        setup() {
            const onCloseButtonClick = () => {
                alert('You pressed close button');
            };

            return { args, alertHeading, alertText, onCloseButtonClick };
        },

        template: `
            <BaseAlert close-button @close-button-click="onCloseButtonClick">
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </BaseAlert>
        `
    })
};

export const Footer: Story = {
    render: (args) => ({
        components: { BaseAlert, BaseButton },

        setup() {
            return { args, alertHeading, alertText };
        },

        template: `
            <BaseAlert>
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>

                <template #footer>
                    <div class="sb-flex sb-justify-end sb-gap-2">
                        <BaseButton type="flat">Close</BaseButton>
                        <BaseButton>Learn more</BaseButton>
                    </div>
                </template>
            </BaseAlert>
        `
    })
};
