<template>
    <main>
        <Header />
        <slot></slot>
    </main>
</template>

<script lang="ts" setup>
import Header from '@/components/Layout/Header/Header.vue';
</script>
