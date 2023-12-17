<template>
    <div class="fg-alert" :style="{ '--color-mode': `var(--fg-${color})` }">
        <div class="fg-alert__wrapper">
            <FgAlertCloseButton
                v-if="closeButton"
                class="fg-alert__close"
                @click="$emit('close-button-click')"
            />

            <div v-if="$slots.prepend" class="fg-alert__prepend">
                <slot name="prepend"></slot>
            </div>

            <div class="fg-alert__body">
                <h4 v-if="$slots.heading" class="fg-alert__heading">
                    <slot name="heading"></slot>
                </h4>

                <div class="fg-alert__content">
                    <slot></slot>
                </div>

                <footer v-if="$slots.footer" class="fg-alert__footer">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FgAlertCloseButton from './FgAlertCloseButton.vue';
import type { FgAlertProps } from './FgAlert';

defineEmits<{
    'close-button-click': [];
}>();

withDefaults(defineProps<FgAlertProps>(), {
    color: 'primary'
});
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

.fg-alert {
    @extend .text-body-m;

    position: relative;
    background: rgba(var(--color-mode), 0.1);
    color: rgb(var(--color-mode));
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    &__wrapper {
        display: flex;
        align-items: center;
        padding: 24px 40px 24px 24px;
    }

    &__prepend {
        flex-shrink: 0;
        margin-right: 16px;
    }

    &__heading {
        @extend .text-heading-xs;

        margin-bottom: 16px;
    }

    &__content {
        @extend .text-body-m;
    }

    &__footer {
        margin-top: 24px;
    }

    &__close {
        position: absolute;
        top: 12px;
        right: 12px;
    }

    &::before {
        content: '';
        width: 2px;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: rgb(var(--color-mode));
    }
}
</style>
