<template>
    <div
        class="fg-chip"
        :class="[type && `fg-chip--${type}`, `fg-chip--${size}`]"
        :style="{ '--color-mode': color && `var(--fg-${color})` }"
    >
        <div class="fg-chip__overlay"></div>

        <div class="fg-chip__wrapper">
            <div v-if="$slots.prepend" class="fg-chip__prepend">
                <slot name="prepend"></slot>
            </div>

            <slot></slot>

            <div v-if="$slots.append" class="fg-chip__append">
                <slot name="append"></slot>
            </div>

            <SvgIcon
                v-if="closable"
                class="fg-chip__close"
                :width="16"
                @click.stop="$emit('close')"
            >
                <Component :is="closeIconComponent" />
            </SvgIcon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { FgChipProps } from '@/components/Chip/FgChip';
import SvgIcon from '@/components/SvgIcon.vue';

import IconCloseFilled from '@/icons/IconCloseFilled.vue';
import IconTrash from '@/icons/IconTrash.vue';
import { computed } from 'vue';

/**
 * TODO: Add icons to component
 */

const props = withDefaults(defineProps<FgChipProps>(), {
    size: 'medium',
    closeIcon: 'close'
});

const closeIconComponent = computed(() => {
    switch (props.closeIcon) {
        case 'trash':
            return IconTrash;
        case 'close':
        default:
            return IconCloseFilled;
    }
});

defineEmits<{
    close: [];
}>();
</script>

<style lang="scss">
@import '@/assets/styles/typography.scss';
@import '@/assets/styles/mixin.scss';

.fg-chip {
    $self: &;

    position: relative;
    color: rgb(var(--color-mode));
    user-select: none;

    &__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: currentColor;
        opacity: 0.1;
        border-radius: 2rem;
    }

    &__wrapper {
        position: relative;
        z-index: 1;
        height: var(--fg-chip-height);
        padding-left: var(--fg-chip-padding);
        padding-right: var(--fg-chip-padding);
        display: flex;
        align-items: center;
    }

    &__prepend,
    &__append {
        fill: currentColor;
    }

    &__prepend {
        margin-right: 6px;
    }

    &__append {
        margin-left: 6px;
    }

    &__close {
        fill: currentColor;
        margin-left: 6px;
        cursor: pointer;
    }

    &--border {
        #{$self}__overlay {
            background-color: transparent;
            border: 1px solid currentColor;
            opacity: 0.3;
        }
    }

    &--text {
        #{$self}__overlay {
            background-color: transparent;
        }
    }

    // Sizes
    &--x-small {
        @extend .text-body-xs;
        --fg-chip-height: 20px;
        --fg-chip-padding: 0.5rem;
    }

    &--small {
        @extend .text-body-s;
        --fg-chip-height: 24px;
        --fg-chip-padding: 0.5rem;
    }

    &--medium {
        @extend .text-body-m;
        --fg-chip-height: 30px;
        --fg-chip-padding: 0.75rem;
    }

    &--large {
        @extend .text-body-l;
        --fg-chip-height: 36px;
        --fg-chip-padding: 1rem;
    }

    &--x-large {
        @extend .text-body-xl;
        --fg-chip-height: 44px;
        --fg-chip-padding: 1.3rem;
    }
}
</style>
