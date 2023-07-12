<template>
    <tr class="fg-tr" :class="[tableProps?.striped && 'fg-tr--striped']">
        <slot></slot>
    </tr>
</template>

<script lang="ts" setup>
import { FgTablePropsKey } from '@/components/Table/FgTable';
import { inject } from 'vue';

const tableProps = inject(FgTablePropsKey);
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-tr {
    &--striped {
        &:nth-child(even) {
            background: getColor('base-02', 0.7);
        }
    }

    &:hover {
        background: getColor('base-02', 0.7);
    }

    &:first-child {
        .fg-td {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
}
</style>
