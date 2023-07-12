<template>
    <div class="popover-demo">
        <h3 class="text-heading-xs">Authorization</h3>
        <div class="popover-demo__form">
            <FgInput v-model="login" placeholder="Login" />
            <FgInput v-model="password" placeholder="Password" />
            <FgButton expanded>Sign In</FgButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FgInput from '@/components/Input/FgInput.vue';
import FgButton from '@/components/Button/FgButton.vue';
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
