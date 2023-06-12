<template>
    <BaseModalOverlay :active="isShown" />

    <div class="fg-modal" @click.capture="clickOutside">
        <div class="fg-modal__wrapper" :style="{ maxWidth: `${maxWidth + 80}px` }">
            <Transition name="pop" @after-leave="leaveModal">
                <div
                    v-if="isShown"
                    ref="modalBody"
                    tabindex="-1"
                    class="fg-modal-body"
                    :style="{
                        padding: `${padding}px`,
                        ...(padding === 0
                            ? { display: 'flex', flexDirection: 'column' }
                            : { width: '100%' })
                    }"
                >
                    <BaseModalCloseButton
                        v-if="!hideCloseButton"
                        class="fg-modal__close"
                        @click="close"
                    />

                    <div v-if="!!$slots.header" class="fg-modal-body__header">
                        <slot name="header" />
                    </div>

                    <slot :close="close" />

                    <div v-if="!!$slots.footer" class="fg-modal-body__footer">
                        <slot name="footer" :close="close" />
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseModalOverlay from '@/components/Base/Modal/BaseModalOverlay.vue';
import BaseModalCloseButton from '@/components/Base/Modal/BaseModalCloseButton.vue';
import { promiseTimeout, useEventListener, useFocus } from '@vueuse/core';
import { onMounted, onUnmounted, ref } from 'vue';

export interface Props {
    maxWidth?: number;
    padding?: number;
    hideCloseButton?: boolean;
    preventOutsideClick?: boolean;
    preventEsc?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    maxWidth: 640,
    padding: 40,
    hideCloseButton: false,
    preventOutsideClick: false,
    preventEsc: false
});

const keyCodesToCloseModal = ['Escape'];

const isShown = ref(false);
const modalBody = ref<HTMLElement | null>(null);

const emit = defineEmits<{ (event: 'closeModal'): void }>();

const close = (_ev?: Event, callback = () => {}) => {
    isShown.value = false;
    callback();
};

const leaveModal = () => {
    emit('closeModal');
};

const playShakingAnimation = async () => {
    modalBody.value?.classList.add('animate-scale');
    await promiseTimeout(170);
    modalBody.value?.classList.remove('animate-scale');
};

const handleKeydown = async (event: KeyboardEvent) => {
    if (!keyCodesToCloseModal.includes(event.key)) {
        return;
    }

    if (props.preventEsc) {
        await playShakingAnimation();
        return;
    }

    close();
};

onMounted(() => {
    isShown.value = true;
    useEventListener(window, 'keydown', handleKeydown);
    document?.body?.classList.add('overflow-hidden');
    useFocus(modalBody, { initialValue: true });
});

onUnmounted(() => {
    document?.body?.classList.remove('overflow-hidden');
});

const clickOutside = async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.closest('.fg-modal-body')) {
        return;
    }

    if (!props.preventOutsideClick) {
        close();
        return;
    }

    await playShakingAnimation();
};
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    overflow: auto;

    &__wrapper {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        margin: auto;
        padding: 40px;
    }

    &__close {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(25%, -25%);
    }
}

.fg-modal-body {
    position: relative;
    min-width: 100%;
    background-repeat: 20px;
    box-sizing: border-box;
    outline: none;
    background-color: getColor('base-01');
    border-radius: 24px;

    &__header {
        margin-bottom: 16px;
    }

    &__footer {
        margin-top: 16px;
    }
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
</style>
