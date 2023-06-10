<template>
    <div class="fg-loader">
        <span class="fg-loader__circle" :style="style" />
    </div>
</template>

<script setup lang="ts">
import type { BaseLoaderProps } from './BaseLoader';
import { computed, type HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<BaseLoaderProps>(), {
    size: '20px',
    width: '3px'
});

const style = computed<HTMLAttributes['style']>(() => ({
    width: props.size,
    height: props.size,
    borderWidth: `${props.width}`
}));
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-loader {
    cursor: pointer;
    pointer-events: none;
    display: flex;

    &__circle {
        position: relative;
        display: inline-flex;
        border-radius: 50%;
        border: solid rgba(var(--loader-color, var(--fg-primary)), 0.2);
        border-top-color: rgb(var(--loader-color), var(--fg-primary));
        animation: spin 0.8s ease infinite;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
