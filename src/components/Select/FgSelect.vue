<template>
    <div
        ref="selectRef"
        class="fg-select"
        :class="{
            'fg-select--opened': isListShown,
            'fg-select--active-label': placeholderAsLabel && (modelValue || isListShown)
        }"
    >
        <div class="fg-select-input" @click="isListShown = !isListShown">
            <div v-if="modelValue" class="fg-select-input__value">{{ modelValue }}</div>
            <div v-if="isPlaceholderShown" class="fg-select-input__placeholder">
                {{ placeholder }}
            </div>

            <SvgIcon class="fg-select-input__arrow">
                <IconChevronDown />
            </SvgIcon>
        </div>

        <Transition>
            <div v-if="isListShown" class="fg-select-list">
                <div
                    v-for="(option, index) in options"
                    :key="index"
                    class="fg-select-list__option"
                    :class="[{ 'fg-select-list__option--active': option === modelValue }]"
                    @click="selectOption(option)"
                >
                    {{ option }}
                </div>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup generic="T">
import SvgIcon from '@/components/SvgIcon.vue';
import IconChevronDown from '@/icons/chevron/IconChevronDown.vue';
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import type { FgSelectProps } from './FgSelect';

const props = defineProps<FgSelectProps<T>>();

const emit = defineEmits<{
    'update:modelValue': [value: T];
}>();

const selectRef = ref<HTMLElement>();
const isListShown = ref(false);

const selectOption = (option: T) => {
    emit('update:modelValue', option);
    isListShown.value = false;
};

const isPlaceholderShown = computed(() => {
    if (props.placeholder && props.modelValue && props.placeholderAsLabel) {
        return true;
    }

    if (props.placeholder && !props.modelValue) {
        return true;
    }

    return false;
});

onClickOutside(selectRef, () => {
    isListShown.value = false;
});
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

$selectShadow: 0px 10px 20px -10px getColor('base-03');
$selectPadding: 16px;

.fg-select {
    $self: &;

    width: 100%;
    position: relative;
    min-width: 100px;
    font-size: 14px;

    &--opened {
        #{$self}-input {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        #{$self}-list {
            box-shadow: $selectShadow;
        }
    }

    &--active-label {
        #{$self}-input {
            &__placeholder {
                @extend .text-body-s;
                transform: translate(-8px, -32px);
                color: inherit;
            }
        }
    }
}

.fg-select-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--fg-form-element-height-medium);
    border-radius: var(--fg-form-element-border-radius-medium);
    background: getColor('base-02');
    padding-left: $selectPadding;
    padding-right: $selectPadding;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 10;

    &__value {
        position: absolute;
        left: $selectPadding;
        top: 50%;
        transform: translateY(-50%);
    }

    &__placeholder {
        color: getColor('base-06');
        user-select: none;
        transition: 0.2s ease-in-out;
        font-size: 13px;
    }

    &__arrow {
        margin-left: auto;
        flex-shrink: 0;
    }
}

.fg-select-list {
    background: getColor('base-01');
    position: absolute;
    left: 0;
    top: calc(100% - 3px);
    width: 100%;
    max-height: 200px;
    overflow: scroll;
    border-bottom-left-radius: var(--fg-form-element-border-radius-medium);
    border-bottom-right-radius: var(--fg-form-element-border-radius-medium);
    padding-top: 12px;

    // TODO: make it more beautiful
    &::-webkit-scrollbar {
        width: 8px;
        height: 0;
    }

    &::-webkit-scrollbar-track {
        background: none;
    }

    &::-webkit-scrollbar-thumb {
        background: getColor('base-03');
        border-radius: 16px;
    }

    &__option {
        display: flex;
        align-items: center;
        padding-left: $selectPadding;
        padding-right: $selectPadding;
        min-height: var(--fg-form-element-height-medium);
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &--active,
        &:hover {
            padding-left: 15px;
            color: getColor('primary');
        }
    }
}
</style>
