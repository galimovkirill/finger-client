<template>
    <DemoWrapper class="demo-button">
        <div class="demo-button__block">
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                active
                :loading="loading"
            >
                Active
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                :loading="loading"
            >
                Default
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                disabled
                :loading="loading"
            >
                Disabled
            </BaseButton>
        </div>

        <div class="demo-button__block">
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                type="flat"
                active
                :loading="loading"
            >
                Active
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                type="flat"
                :loading="loading"
            >
                Default
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                type="flat"
                disabled
                :loading="loading"
            >
                Disabled
            </BaseButton>
        </div>

        <div class="demo-button__block">
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                type="border"
                active
                :loading="loading"
            >
                Active
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                type="border"
                :loading="loading"
            >
                Default
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                type="border"
                disabled
                :loading="loading"
            >
                Disabled
            </BaseButton>
        </div>
    </DemoWrapper>
</template>

<script lang="ts" setup>
import DemoWrapper from '@/components/Demo/DemoWrapper.vue';
import BaseButton from './BaseButton.vue';
import { ref } from 'vue';
import type { BaseButtonSize, BaseButtonColor } from './BaseButton';

const color = ref<BaseButtonColor>('primary');
const size = ref<BaseButtonSize>('small');
const uppercase = ref(false);
const expanded = ref(false);
const loading = ref(false);
</script>

<style lang="scss">
.demo-button {
    display: grid;
    gap: 24px;

    &__block {
        display: flex;
        gap: 8px;
    }
}
</style>
