<template>
    <form class="register-form" @submit.prevent="submitRegister">
        <h1 class="text-heading-5 login-form__heading">Регистрация</h1>

        <div class="register-fields">
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

            <BaseInput v-model="passwordRepeat" placeholder="Повторите пароль" type="password">
                <template #icon>
                    <SvgIcon>
                        <IconLock />
                    </SvgIcon>
                </template>
            </BaseInput>
        </div>

        <div class="register-actions">
            <BaseButton native-type="submit">Зарегистрироваться</BaseButton>
            <BaseButton type="border" :to="{ name: 'Login' }">У меня есть аккаунт</BaseButton>
        </div>
    </form>
</template>

<script lang="ts" setup>
import BaseInput from '@/components/Base/Input/BaseInput.vue';
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconEmail from '@/icons/IconEmail.vue';
import IconLock from '@/icons/IconLock.vue';
import { useRegister } from '@/composables/useRegister';

const { login, password, passwordRepeat, submitRegister } = useRegister();
</script>

<style lang="scss">
.register-form {
    min-width: 300px;
}

.register-fields {
    display: grid;
    gap: 8px;
}

.register-actions {
    display: grid;
    gap: 8px;
    margin-top: 24px;
}
</style>
