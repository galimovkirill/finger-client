<template>
    <div class="login-form">
        <h1 class="text-heading-s login-form__heading">Create an account</h1>

        <div class="login-fields">
            <FgInput v-model="login" placeholder="Email" type="email">
                <template #icon>
                    <SvgIcon>
                        <IconEmail />
                    </SvgIcon>
                </template>
            </FgInput>

            <FgInput v-model="password" placeholder="Password" type="password">
                <template #icon>
                    <SvgIcon>
                        <IconLock />
                    </SvgIcon>
                </template>
            </FgInput>
        </div>

        <div class="login-actions">
            <FgButton>Sign In</FgButton>
            <FgButton type="border">Already have an account?</FgButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FgButton from '@/components/Button/FgButton.vue';
import FgInput from '@/components/Input/FgInput.vue';
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
