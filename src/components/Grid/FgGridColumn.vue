<template>
    <div class="fg-col" :style="getColumnResponsiveStyles">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ResponsiveProperty } from '@/types/global';
import { useBreakpoints } from '@/composables/useBreakpoints';

interface Props {
    /**
     * Number of columns for current cell
     */
    span?: ResponsiveProperty<number>;
    /**
     * Offset from left (number of columns to skip)
     */
    offset?: ResponsiveProperty<number>;
}

const props = withDefaults(defineProps<Props>(), {
    span: () => ({
        sm: 12,
        md: 12,
        xl: 12,
    }),
    offset: () => ({
        sm: 0,
        md: 0,
        xl: 0,
    })
});

const { current: currentBreakpoint } = useBreakpoints();

const getColumnResponsiveStyles = computed(() => {
    const styles: Record<string, number | string> = {};

    styles['--col-span'] = props.span[currentBreakpoint.value];
    styles['--col-offset'] = props.offset?.[currentBreakpoint.value] || 0;

    return styles;
});
</script>

<style lang="scss">
.fg-col {
    $columnsCount: 12;

    width: calc(100% * var(--col-span) / $columnsCount - var(--row-gutter-x));
    margin: var(--margin-y) var(--margin-x);
    margin-left: calc(var(--margin-x) + (100% / $columnsCount * var(--col-offset)));
}
</style>
