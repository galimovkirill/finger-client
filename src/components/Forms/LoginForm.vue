<template>
    <form class="login-form" @submit.prevent="submitLogin">
        <h1 class="text-heading-s login-form__heading">Вход в аккаунта</h1>

        <div class="login-fields">
            <BaseInput v-model="login" placeholder="Электронный адрес" type="email">
                <template #icon>
                    <SvgIcon>
                        <IconEmail />
                    </SvgIcon>
                </template>
            </BaseInput>

            <BaseInput v-model="password" placeholder="Пароль" type="password">
                <template #icon>
                    <SvgIcon>
                        <IconLock />
                    </SvgIcon>
                </template>
            </BaseInput>
        </div>

        <div class="login-actions">
            <BaseButton native-type="submit">Войти</BaseButton>
            <BaseButton type="border" :to="{ name: 'Register' }">Зарегистрироваться</BaseButton>
        </div>
    </form>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import BaseInput from '@/components/Base/Input/BaseInput.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconLock from '@/icons/IconLock.vue';
import IconEmail from '@/icons/IconEmail.vue';
import { useLogin } from '@/composables/useLogin';

const { login, password, submitLogin } = useLogin();
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
