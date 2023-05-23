<template>
    <DemoWrapper class="demo-button">
        <div class="demo-button__block">
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                :active="activeIndex === 0"
                :loading="loading"
                @click="activeIndex = 0"
            >
                <template #prepend>
                    <SvgIcon>
                        <UserIcon />
                    </SvgIcon>
                </template>

                Active
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :active="activeIndex === 1"
                :uppercase="uppercase"
                :loading="loading"
                @click="activeIndex = 1"
            >
                Default

                <template #append>
                    <SvgIcon>
                        <UserIcon />
                    </SvgIcon>
                </template>
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
                :active="activeIndex === 0"
                :loading="loading"
                @click="activeIndex = 0"
            >
                Active
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                :active="activeIndex === 1"
                type="flat"
                :loading="loading"
                @click="activeIndex = 1"
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
                :active="activeIndex === 0"
                :loading="loading"
                @click="activeIndex = 0"
            >
                Active
            </BaseButton>
            <BaseButton
                :expanded="expanded"
                :color="color"
                :size="size"
                :uppercase="uppercase"
                :active="activeIndex === 1"
                type="border"
                :loading="loading"
                @click="activeIndex = 1"
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
import SvgIcon from '@/components/SvgIcon.vue';
import UserIcon from '@/icons/UserIcon.vue';

const activeIndex = ref(0);
const color = ref<BaseButtonColor>('danger');
const size = ref<BaseButtonSize>('medium');
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
