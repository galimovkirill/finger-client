<template>
    <table
        class="fg-table"
        :style="{
            '--fg-table-padding-x': '1rem',
            '--fg-table-padding-y': '0.5rem',
            '--fg-table-border-radius': '12px'
        }"
    >
        <thead v-if="$slots.thead" class="fg-table__thead">
            <slot name="thead"></slot>
        </thead>

        <tbody v-if="$slots.tbody">
            <slot name="tbody" class="fg-table__tbody"></slot>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { FgTableProps, FgTablePropsKey } from '@/components/Table/FgTable';
import { provide } from 'vue';

const props = defineProps<FgTableProps>();

provide(FgTablePropsKey, props);
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-table {
    width: 100%;
    border: none;
    border-collapse: collapse;
    text-align: left;
    font-family: inherit;

    &__thead {
        background: getColor('base-03');
    }
}
</style>
