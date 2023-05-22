<template>
    <Component
        :is="componentTag"
        v-bind="componentAttrs"
        :class="componentClasses"
        class="button"
        :style="{ '--color-mode': `var(--fg-${color})` }"
    >
        <BaseLoader v-if="loading" class="button__loader" />

        <div class="button__content">
            <slot></slot>
        </div>
    </Component>
</template>

<script lang="ts" setup>
import { computed, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'vue';
import type { BaseButtonProps } from './BaseButton';
import type { RouterLinkProps } from 'vue-router';
import BaseLoader from '@/components/Base/Loader/BaseLoader.vue';

const props = withDefaults(defineProps<BaseButtonProps>(), {
    type: 'default',
    size: 'medium',
    color: 'primary'
});

const isLink = computed(() => Boolean(props.to));

const isExternalLink = computed(() => {
    if (!isLink.value || typeof props.to !== 'string') {
        return false;
    }

    return props.to.startsWith('http');
});

const componentTag = computed(() => {
    if (isLink.value) {
        return typeof props.to === 'string' ? 'a' : 'RouterLink';
    }

    return 'button';
});

const componentAttrs = computed(() => {
    const attrs: Partial<ButtonHTMLAttributes & AnchorHTMLAttributes & RouterLinkProps> = {};

    if (props.disabled) {
        attrs.disabled = true;
    }

    if (isLink.value) {
        if (typeof props.to === 'string') {
            attrs.href = props.to;
        } else {
            attrs.to = props.to;
        }
    }

    if (isExternalLink.value) {
        attrs.target = '_blank';
        attrs.rel = 'nofollow';
    }

    if (!isLink.value && props.nativeType) {
        attrs.type = props.nativeType;
    }

    return attrs;
});

const componentClasses = computed(() => {
    const classes: string[] = [];

    classes.push(`button--${props.type}`);
    classes.push(`button--${props.size}`);
    classes.push(`button--${props.color}`);

    if (props.disabled) {
        classes.push('button--disabled');
    }

    if (props.uppercase) {
        classes.push('button--uppercase');
    }

    if (props.active) {
        classes.push('button--active');
    }

    if (props.expanded) {
        classes.push('button--expanded');
    }

    if (props.loading) {
        classes.push('button--loading');
    }

    return classes;
});
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

.button {
    $self: &;
    $transitionDuration: 0.25s;

    position: relative;
    cursor: pointer;
    user-select: none;
    transition: all $transitionDuration ease;
    box-sizing: border-box;

    &__loader {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    }

    // Simple modifiers
    &--disabled {
        pointer-events: none;
        opacity: 0.4;
    }

    &--uppercase {
        text-transform: uppercase;
    }

    &--expanded {
        width: 100%;
    }

    &--loading {
        #{$self}__content {
            opacity: 0;
        }
    }

    // Type modifiers
    &--default {
        color: getColor('text-reversed');
        background-color: rgb(var(--color-mode));
        --loader-color: var(--fg-base-01);

        &#{$self}--active,
        &:hover {
            box-shadow: 0px 10px 20px -10px rgb(var(--color-mode));
            transform: translateY(-3px);
        }
    }

    &--flat {
        color: rgb(var(--color-mode));
        background-color: rgba(var(--color-mode), 0.1);

        &:hover {
            background-color: rgba(var(--color-mode), 0.2);
        }

        &#{$self}--active {
            --loader-color: var(--fg-base-01);

            background-color: rgb(var(--color-mode));
            color: getColor('text-reversed');
        }
    }

    &--border {
        color: rgb(var(--color-mode));

        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: inherit;
            border: 2px solid rgba(var(--color-mode), 1);
            transition: all $transitionDuration ease;
        }

        &:hover {
            &::after {
                opacity: 0.3;
            }
        }

        &#{$self}--active {
            --loader-color: var(--fg-base-01);

            background: rgb(var(--color-mode));
            color: getColor('text-reversed');
        }
    }

    // Size modifiers
    &--large {
        @extend .text-body-m;

        height: var(--fg-form-element-height-large);
        padding-left: 20px;
        padding-right: 20px;
        border-radius: var(--fg-form-element-border-radius-large);
    }

    &--medium {
        @extend .text-body-s;

        height: var(--fg-form-element-height-medium);
        padding-left: 12px;
        padding-right: 12px;
        border-radius: var(--fg-form-element-border-radius-medium);
    }

    &--small {
        @extend .text-body-xs;

        height: var(--fg-form-element-height-small);
        padding-left: 8px;
        padding-right: 8px;
        border-radius: var(--fg-form-element-border-radius-small);
    }
}
</style>
