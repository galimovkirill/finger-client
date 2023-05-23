<template>
    <div class="checkbox">
        <input
            :id="id"
            type="checkbox"
            class="checkbox__hidden-element"
            :checked="modelValue"
            @change="onChange(($event.target as HTMLInputElement).checked)"
        />

        <label :for="id" class="checkbox__label">
            <span class="checkbox__element"></span>

            <span v-if="$slots.default" class="checkbox__text">
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script lang="ts" setup>
import type { BaseCheckboxProps } from './BaseCheckbox';

defineProps<BaseCheckboxProps>();

const emit = defineEmits<{
    'update:modelValue': [value: boolean];
}>();

const onChange = (value: boolean) => {
    emit('update:modelValue', value);
};
</script>

<style lang="scss">
@import '@/assets/styles/typography.scss';
@import '@/assets/styles/mixin.scss';

.checkbox {
    &__hidden-element {
        display: none;

        &:checked + label .checkbox__element {
            border-color: getColor('primary');

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    &__label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    &__element {
        border: 1px solid getColor('base-05');
        border-radius: 4px;
        width: 16px;
        height: 16px;
        display: inline-block;
        position: relative;
        transition: 0.3s;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 11px;
            height: 11px;
            background-color: getColor('primary');
            border-radius: 3px;
            transition: 0.3s;
        }
    }

    &__text {
        @extend .text-body-s;

        margin-left: 8px;
    }
}
</style>
