import type { Meta, StoryObj } from '@storybook/vue3';

import SvgIcon from '@/components/SvgIcon.vue';
import IconTravel from '@/icons/IconTravel.vue';

import FgButton from '@/components/Button/FgButton.vue';

import FgAlert from '@/components/Alert/FgAlert.vue';
import { FgAlertColors } from '@/components/Alert/FgAlert';

const meta: Meta<typeof FgAlert> = {
    component: FgAlert,
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

type Story = StoryObj<typeof FgAlert>;

const alertHeading = 'Bill Gates';

const alertText =
    'William Henry Gates III (born October 28, 1955) is an American business magnate, investor, and philanthropist. He is best known for co-founding software giant Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being its largest individual shareholder until May 2014.';

export const Default: Story = {
    render: (args) => ({
        components: { FgAlert },

        setup() {
            return { args, alertHeading, alertText };
        },

        template: `
            <FgAlert>
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </FgAlert>
        `
    })
};

export const Color: Story = {
    render: (args) => ({
        components: { FgAlert },

        setup() {
            return { args, alertHeading, alertText, FgAlertColors };
        },

        template: `
            <FgAlert v-for="color in FgAlertColors" :key="color" :color="color">
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </FgAlert>
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { FgAlert, SvgIcon, IconTravel, FgButton },

        setup() {
            return { args, alertHeading, alertText };
        },

        template: `
            <FgAlert>
                <template #prepend>
                    <SvgIcon :width="24">
                        <IconTravel />
                    </SvgIcon>
                </template>

                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </FgAlert>
        `
    })
};

export const CloseButton: Story = {
    render: (args) => ({
        components: { FgAlert },

        setup() {
            const onCloseButtonClick = () => {
                alert('You pressed close button');
            };

            return { args, alertHeading, alertText, onCloseButtonClick };
        },

        template: `
            <FgAlert close-button @close-button-click="onCloseButtonClick">
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>
            </FgAlert>
        `
    })
};

export const Footer: Story = {
    render: (args) => ({
        components: { FgAlert, FgButton },

        setup() {
            return { args, alertHeading, alertText };
        },

        template: `
            <FgAlert>
                <template #heading>{{ alertHeading }}</template>

                <p>{{ alertText }}</p>

                <template #footer>
                    <div class="sb-flex sb-justify-end sb-gap-2">
                        <FgButton type="flat">Close</FgButton>
                        <FgButton>Learn more</FgButton>
                    </div>
                </template>
            </FgAlert>
        `
    })
};
