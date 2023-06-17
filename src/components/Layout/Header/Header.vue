<template>
    <header class="header">
        <div class="header__wrapper container">
            <a href="#" class="header__logo">Finger App</a>

            <HeaderMenu />
        </div>
    </header>
</template>

<script lang="ts" setup>
import HeaderMenu from '@/components/Layout/Header/HeaderMenu.vue';
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

.header {
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid getColor('base-04');

    &__logo {
        @extend .text-heading-xs;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
