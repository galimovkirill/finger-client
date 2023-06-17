<template>
    <div class="header-menu">
        <BaseButton type="flat" size="small">+ Запись</BaseButton>
        <HeaderProfile />
    </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/Base/Button/BaseButton.vue';
import HeaderProfile from '@/components/Layout/Header/HeaderProfile.vue';
</script>

<style lang="scss">
.header-menu {
    display: flex;
    align-items: center;
    gap: 16px;
}
</style>
