<template>
    <div class="fg-input" :class="inputClasses">
        <div class="fg-input__wrapper">
            <input
                ref="inputTarget"
                :type="visiblePassword ? 'text' : type"
                :value="modelValue"
                :placeholder="placeholder"
                class="fg-input__element"
                @input="onInput(($event.target as HTMLInputElement).value)"
            />

            <div v-if="!modelValue" class="fg-input__placeholder">{{ placeholder }}</div>

            <div v-if="$slots.icon" class="fg-input__icon" @click="$emit('iconClick')">
                <slot name="icon"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue';
import type { BaseInputProps } from './BaseInput';
import { useFocus } from '@vueuse/core';

export interface Props extends BaseInputProps {
    modelValue: string | number;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    iconPosition: 'start'
});

const emit = defineEmits<{
    'update:modelValue': [value: string | number];
    iconClick: [];
}>();

const slots = useSlots();

const inputClasses = computed(() => {
    const classes: string[] = [];

    if (slots.icon) {
        classes.push(`fg-input--icon-${props.iconPosition}`);
    }

    if (props.clickableIcon) {
        classes.push('fg-input--clickable-icon');
    }

    if (isInputFocused.value) {
        classes.push('fg-input--focused');
    }

    return classes;
});

const onInput = (value: string) => {
    if (props.type === 'number') {
        emit('update:modelValue', Number(value));
        return;
    }

    emit('update:modelValue', value);
};

const inputTarget = ref<HTMLInputElement>();

const { focused: isInputFocused } = useFocus(inputTarget);
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

.fg-input {
    $self: &;
    $inputPadding: 16px;

    // Set width as input height to make icon square
    $iconWidth: var(--fg-form-element-height-medium);
    $iconSpace: calc($iconWidth + 8px);

    @extend .text-body-s;

    position: relative;

    &__element {
        border: none;
        outline: none;
        background: getColor('base-02');
        height: var(--fg-form-element-height-medium);
        border-radius: var(--fg-form-element-border-radius-medium);
        padding-left: $inputPadding;
        padding-right: $inputPadding;
        width: 100%;

        &::placeholder {
            opacity: 0;
        }
    }

    &__placeholder {
        display: flex;
        align-items: center;
        position: absolute;
        left: $inputPadding;
        top: 0;
        height: 100%;
        pointer-events: none;
        color: getColor('base-06');
        transition: all 0.2s ease;
    }

    &__icon {
        position: absolute;
        top: 0;
        height: 100%;
        width: $iconWidth;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: getColor('base-02');

        border-radius: var(--fg-form-element-border-radius-medium);
        transition: all 0.2s ease;
    }

    &--clickable-icon {
        #{$self}__icon {
            cursor: pointer;
        }
    }

    &--icon-start {
        #{$self}__icon {
            left: 0;
            box-shadow: 3px 0px 5px 3px getColor('base-07', 0.03);
        }

        #{$self}__element {
            padding-left: $iconSpace;
        }

        #{$self}__placeholder {
            left: $iconSpace;
        }
    }

    &--icon-end {
        #{$self}__icon {
            right: 0;
            box-shadow: -12px 0 10px -10px getColor('base-07', 0.08);
        }

        #{$self}__element {
            padding-right: $iconSpace;
        }

        #{$self}__placeholder {
            right: $iconSpace;
        }
    }

    &--focused {
        #{$self}__placeholder {
            transform: translateX(3px);
            opacity: 0;
        }

        &#{$self}--icon-start #{$self}__icon {
            transform: translate(-4px, -4px);
        }

        &#{$self}--icon-end #{$self}__icon {
            transform: translate(4px, -4px);
        }
    }
}
</style>
