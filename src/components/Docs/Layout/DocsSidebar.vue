<template>
    <aside class="sidebar">
        <div class="sidebar__wrapper">test</div>
    </aside>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.sidebar {
    width: 100%;
    border-right: 1px solid getColor('base-04');

    &__wrapper {
        padding: 24px;
    }
}
</style>
