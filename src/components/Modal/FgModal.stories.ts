import type { Meta, StoryObj } from '@storybook/vue3';

import FgModal from '@/components/Modal/FgModal.vue';
import FgButton from '@/components/Button/FgButton.vue';
import FgModalDemoContent from '@/components/Modal/FgModalDemoContent.vue';
import { ref } from 'vue';

const meta: Meta<typeof FgModal> = {
    component: FgModal,
    title: 'Components/Modal',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgModal>;

export const Default: Story = {
    render: (args) => ({
        components: { FgModal, FgButton, FgModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, FgModalDemoContent };
        },

        template: `
            <FgButton @click="isModalShown = true">Open modal</FgButton>

            <Teleport to="body">
                <FgModal
                    v-if="isModalShown"
                    @close-modal="isModalShown = false"
                >
                    <FgModalDemoContent />
                </FgModal>
            </Teleport>
        `
    })
};

export const MaxWidth: Story = {
    render: (args) => ({
        components: { FgModal, FgButton, FgModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, FgModalDemoContent };
        },

        template: `
            <FgButton @click="isModalShown = true">Open modal</FgButton>

            <Teleport to="body">
                <FgModal
                    v-if="isModalShown"
                    :max-width="1080"
                    @close-modal="isModalShown = false"
                >
                    <FgModalDemoContent />
                </FgModal>
            </Teleport>
        `
    })
};

export const Padding: Story = {
    render: (args) => ({
        components: { FgModal, FgButton },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown };
        },

        template: `
            <FgButton @click="isModalShown = true">Open modal</FgButton>

            <Teleport to="body">
                <FgModal
                    v-if="isModalShown"
                    :max-width="320"
                    :padding="24"
                    @close-modal="isModalShown = false"
                >
                    <template #header>
                        <h3>Hello world!</h3>
                    </template>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    <template #footer>
                        <FgButton expanded>Say hello</FgButton>
                    </template>
                </FgModal>
            </Teleport>
        `
    })
};

export const HideCloseButton: Story = {
    render: (args) => ({
        components: { FgModal, FgButton, FgModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, FgModalDemoContent };
        },

        template: `
            <FgButton @click="isModalShown = true">Open modal</FgButton>

            <Teleport to="body">
                <FgModal
                    v-if="isModalShown"
                    hide-close-button
                    @close-modal="isModalShown = false"
                >
                    <FgModalDemoContent />
                </FgModal>
            </Teleport>
        `
    })
};

export const PreventOutsideClick: Story = {
    render: (args) => ({
        components: { FgModal, FgButton, FgModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, FgModalDemoContent };
        },

        template: `
            <FgButton @click="isModalShown = true">Open modal</FgButton>

            <Teleport to="body">
                <FgModal
                    v-if="isModalShown"
                    prevent-outside-click
                    @close-modal="isModalShown = false"
                >
                    <FgModalDemoContent />
                </FgModal>
            </Teleport>
        `
    })
};

export const PreventEsc: Story = {
    render: (args) => ({
        components: { FgModal, FgButton, FgModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, FgModalDemoContent };
        },

        template: `
            <FgButton @click="isModalShown = true">Open modal</FgButton>

            <Teleport to="body">
                <FgModal
                    v-if="isModalShown"
                    prevent-esc
                    @close-modal="isModalShown = false"
                >
                    <FgModalDemoContent />
                </FgModal>
            </Teleport>
        `
    })
};
