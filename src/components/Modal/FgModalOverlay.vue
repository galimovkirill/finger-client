<template>
    <Transition name="fade" appear>
        <div v-if="active" class="fg-modal-overlay">
            <slot />
        </div>
    </Transition>
</template>

<script lang="ts" setup>
export interface Props {
    active?: boolean;
}

withDefaults(defineProps<Props>(), {
    active: false
});
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-modal-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background: getColor('base-07', 0.5);
}

::-webkit-scrollbar {
    display: none;
}

.animate-scale {
    animation: min-scale 0.15s;
    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}

@keyframes min-scale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.04);
    }

    to {
        transform: scale(1);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all ease 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
