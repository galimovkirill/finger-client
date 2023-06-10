<template>
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="computedHeight"
    >
        <slot></slot>
    </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

export interface Props {
    width?: number;
    height?: number;
}

const props = withDefaults(defineProps<Props>(), {
    width: 18
});

const computedHeight = computed(() => {
    if (props.height) {
        return props.height;
    }

    return props.width;
});
</script>
