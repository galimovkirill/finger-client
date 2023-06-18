<template>
    <div class="fg-counter" :style="{ '--counter-value': value }"></div>
</template>

<script lang="ts" setup>
interface Props {
    value: number;
}

defineProps<Props>();
</script>

<style lang="scss">
@property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
}

.fg-counter {
    animation: counter 1s alternate ease;
    animation-fill-mode: forwards;
    counter-reset: num var(--num);
}

.fg-counter::after {
    content: counter(num);
}

@keyframes counter {
    from {
        --num: 0;
    }
    to {
        --num: var(--counter-value);
    }
}
</style>
