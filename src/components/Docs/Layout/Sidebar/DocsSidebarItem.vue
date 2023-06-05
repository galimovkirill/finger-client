<template>
    <div
        class="sidebar-item"
        :class="{
            'sidebar-item--active': active,
            'sidebar-item--primary': primary,
            'sidebar-item--dropdown-shown': dropdownShown
        }"
    >
        <div class="sidebar-item__wrapper">
            <div class="sidebar-item__body">
                <div v-if="$slots.icon" class="sidebar-item__icon">
                    <slot name="icon"></slot>
                </div>

                <div class="sidebar-item__name text-body-s">
                    <slot></slot>
                </div>
            </div>

            <SvgIcon v-if="dropdown" class="sidebar-item__chevron">
                <IconChevron />
            </SvgIcon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon.vue';
import IconChevron from '@/icons/IconChevron.vue';

export interface Props {
    active?: boolean;
    primary?: boolean;
    dropdown?: boolean;
    dropdownShown?: boolean;
}

defineProps<Props>();
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

.sidebar-item {
    $self: &;

    padding: 6px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease;

    &__body {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__chevron {
        transition: 0.2s ease;
    }

    &:hover {
        background: getColor('base-02');
    }

    &--active {
        background: getColor('base-02');
    }

    &--primary {
        #{$self}__name {
            @extend .text-body-bold;
        }
    }

    &--dropdown-shown {
        #{$self}__chevron {
            transform: rotate(180deg);
        }
    }
}
</style>
