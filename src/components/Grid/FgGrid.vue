<template>
    <div class="fg-grid">
        <div class="fg-row" :style="rowResponsiveStyles">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ResponsiveProperty } from '@/types/global';
import { GridGutter, GridRowJustify, GridRowAlignment } from './FgGrid';
import { useBreakpoints } from '@/composables/useBreakpoints';

interface Props {
    gutter?: ResponsiveProperty<GridGutter>;
    justify?: ResponsiveProperty<GridRowJustify>;
    align?: ResponsiveProperty<GridRowAlignment>;
}

const props = withDefaults(defineProps<Props>(), {
    gutter: () => ({
        sm: {
            horizontal: 16,
            vertical: 16
        },
        md: {
            horizontal: 24,
            vertical: 24
        },
        xl: {
            horizontal: 24,
            vertical: 24
        },
    }),
    align: () => ({ sm: 'start', md: 'start', xl: 'start' }),
    justify: () => ({ sm: 'start', md: 'start', xl: 'start' })
});

const { current: currentBreakpoint } = useBreakpoints();

const toPixels = (n: number) => `${n}px`;

const rowResponsiveStyles = computed(() => {
    const styles: Record<string, string> = {
        '--row-gutter-x': '0',
        '--row-gutter-y': '0'
    };

    styles['--row-gutter-x'] = toPixels(props.gutter[currentBreakpoint.value].horizontal);
    styles['--row-gutter-y'] = toPixels(props.gutter[currentBreakpoint.value].vertical);
    styles['justify-content'] = props.justify[currentBreakpoint.value];
    styles['align-items'] = props.align[currentBreakpoint.value];

    return styles;
});
</script>

<style lang="scss">
$columnsCount: 12;

.fg-grid {
    overflow: hidden;
}

.fg-row {
    display: flex;
    flex-wrap: wrap;

    --margin-x: calc(var(--row-gutter-x) / 2);
    --margin-x-negative: calc(var(--margin-x) * -1);
    --margin-y: calc(var(--row-gutter-y) / 2);
    --margin-y-negative: calc(var(--margin-y) * -1);

    margin: var(--margin-y-negative) var(--margin-x-negative);
}
</style>
