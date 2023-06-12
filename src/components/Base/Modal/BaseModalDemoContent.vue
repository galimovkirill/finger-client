<template>
    <div class="login-form">
        <h1 class="text-heading-5 login-form__heading">Create an account</h1>

        <div class="login-fields">
            <BaseInput v-model="login" placeholder="Email" type="email">
                <template #icon>
                    <SvgIcon>
                        <IconEmail />
                    </SvgIcon>
                </template>
            </BaseInput>

            <BaseInput v-model="password" placeholder="Password" type="password">
                <template #icon>
                    <SvgIcon>
                        <IconLock />
                    </SvgIcon>
                </template>
            </BaseInput>
        </div>

        <div class="login-actions">
            <BaseButton>Sign In</BaseButton>
            <BaseButton type="border">Already have an account?</BaseButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import BaseInput from '@/components/Base/Input/BaseInput.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconLock from '@/icons/IconLock.vue';
import IconEmail from '@/icons/IconEmail.vue';
import { ref } from 'vue';

const password = ref('');
const login = ref('');
</script>

<style lang="scss">
.login-form {
    min-width: 300px;

    &__heading {
        margin-bottom: 16px;
    }
}

.login-fields {
    display: grid;
    gap: 8px;
}

.login-actions {
    display: grid;
    gap: 8px;
    margin-top: 16px;
}
</style>
