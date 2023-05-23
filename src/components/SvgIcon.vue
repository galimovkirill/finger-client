<template>
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <slot></slot>
    </svg>
</template>

<script lang="ts" setup>
export interface Props {
    width?: number;
    height?: number;
}

withDefaults(defineProps<Props>(), {
    width: 18,
    height: 18
});
</script>
