<template>
    <div class="popover-demo">
        <h3 class="text-heading-xs">Authorization</h3>
        <div class="popover-demo__form">
            <BaseInput v-model="login" placeholder="Login" />
            <BaseInput v-model="password" placeholder="Password" />
            <BaseButton expanded>Sign In</BaseButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseInput from '@/components/Base/Input/BaseInput.vue';
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import { ref } from 'vue';

const login = ref('');
const password = ref('');
</script>

<style lang="scss">
.popover-demo {
    &__form {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
