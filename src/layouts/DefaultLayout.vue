<template>
    <main class="default-layout">
        <Header />

        <div class="default-layout__content">
            <slot></slot>
        </div>
    </main>
</template>

<script lang="ts" setup>
import Header from '@/components/Layout/Header/Header.vue';
</script>

<style lang="scss">
.default-layout {
    &__content {
        padding-top: 48px;
    }
}
</style>
