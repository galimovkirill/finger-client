<template>
    <DemoWrapper class="demo-input">
        <div class="demo-input__wrapper">
            <BaseInput v-model="inputValue1" type="number" />

            <BaseInput v-model="inputValue2" placeholder="Enter your name">
                <template #icon>
                    <SvgIcon>
                        <IconUser />
                    </SvgIcon>
                </template>
            </BaseInput>

            <BaseInput
                v-model="inputValue2"
                placeholder="Enter your name"
                icon-position="end"
                type="password"
                clickable-icon
                :visible-password="isPasswordVisible"
                @iconClick="isPasswordVisible = !isPasswordVisible"
            >
                <template #icon>
                    <SvgIcon>
                        <IconEyeCrossed v-if="isPasswordVisible" />
                        <IconEye v-else />
                    </SvgIcon>
                </template>
            </BaseInput>
        </div>
    </DemoWrapper>
</template>

<script lang="ts" setup>
import DemoWrapper from '@/components/Demo/DemoWrapper.vue';
import BaseInput from './BaseInput.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconUser from '@/icons/IconUser.vue';
import IconEye from '@/icons/IconEye.vue';
import IconEyeCrossed from '@/icons/IconEyeCrossed.vue';
import { ref } from 'vue';

const inputValue1 = ref(0);
const inputValue2 = ref('');

const isPasswordVisible = ref(false);
</script>

<style lang="scss">
.demo-input {
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>
