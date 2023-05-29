<template>
    <main class="docs-layout">
        <DocsHeader />

        <div class="docs-container docs-layout__wrapper">
            <DocsSidebar class="docs-layout__sidebar" />
            <RouterView />
        </div>
    </main>
</template>

<script lang="ts" setup>
import DocsSidebar from '@/components/Docs/Layout/DocsSidebar.vue';
import DocsHeader from '@/components/Docs/Layout/DocsHeader.vue';
</script>

<style lang="scss">
$verticalPadding: 64px;

.docs-layout {
    &__wrapper {
        position: relative;
        min-height: 100vh;
    }

    &__sidebar {
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        height: 100%;
        max-width: 280px;
        padding-top: $verticalPadding;
    }
}

.docs-container {
    max-width: 976px;
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
    padding-top: $verticalPadding;
    margin: 0 auto;
}
</style>
