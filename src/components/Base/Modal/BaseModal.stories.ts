import type { Meta, StoryObj } from '@storybook/vue3';

import BaseModal from '@/components/Base/Modal/BaseModal.vue';
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import BaseModalDemoContent from '@/components/Base/Modal/BaseModalDemoContent.vue';
import { ref } from 'vue';

const meta: Meta<typeof BaseModal> = {
    component: BaseModal,
    title: 'Modal',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
    render: (args) => ({
        components: { BaseModal, BaseButton, BaseModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, BaseModalDemoContent };
        },

        template: `
            <BaseButton @click="isModalShown = true">Open modal</BaseButton>

            <Teleport to="body">
                <BaseModal
                    v-if="isModalShown"
                    @close-modal="isModalShown = false"
                >
                    <BaseModalDemoContent />
                </BaseModal>
            </Teleport>
        `
    })
};

export const MaxWidth: Story = {
    render: (args) => ({
        components: { BaseModal, BaseButton, BaseModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, BaseModalDemoContent };
        },

        template: `
            <BaseButton @click="isModalShown = true">Open modal</BaseButton>

            <Teleport to="body">
                <BaseModal
                    v-if="isModalShown"
                    :max-width="1080"
                    @close-modal="isModalShown = false"
                >
                    <BaseModalDemoContent />
                </BaseModal>
            </Teleport>
        `
    })
};

export const Padding: Story = {
    render: (args) => ({
        components: { BaseModal, BaseButton },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown };
        },

        template: `
            <BaseButton @click="isModalShown = true">Open modal</BaseButton>

            <Teleport to="body">
                <BaseModal
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
                        <BaseButton expanded>Say hello</BaseButton>
                    </template>
                </BaseModal>
            </Teleport>
        `
    })
};

export const HideCloseButton: Story = {
    render: (args) => ({
        components: { BaseModal, BaseButton, BaseModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, BaseModalDemoContent };
        },

        template: `
            <BaseButton @click="isModalShown = true">Open modal</BaseButton>

            <Teleport to="body">
                <BaseModal
                    v-if="isModalShown"
                    hide-close-button
                    @close-modal="isModalShown = false"
                >
                    <BaseModalDemoContent />
                </BaseModal>
            </Teleport>
        `
    })
};

export const PreventOutsideClick: Story = {
    render: (args) => ({
        components: { BaseModal, BaseButton, BaseModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, BaseModalDemoContent };
        },

        template: `
            <BaseButton @click="isModalShown = true">Open modal</BaseButton>

            <Teleport to="body">
                <BaseModal
                    v-if="isModalShown"
                    prevent-outside-click
                    @close-modal="isModalShown = false"
                >
                    <BaseModalDemoContent />
                </BaseModal>
            </Teleport>
        `
    })
};

export const PreventEsc: Story = {
    render: (args) => ({
        components: { BaseModal, BaseButton, BaseModalDemoContent },

        setup() {
            const isModalShown = ref(false);

            return { args, isModalShown, BaseModalDemoContent };
        },

        template: `
            <BaseButton @click="isModalShown = true">Open modal</BaseButton>

            <Teleport to="body">
                <BaseModal
                    v-if="isModalShown"
                    prevent-esc
                    @close-modal="isModalShown = false"
                >
                    <BaseModalDemoContent />
                </BaseModal>
            </Teleport>
        `
    })
};
