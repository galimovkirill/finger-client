<template>
    <div class="account-grid">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.account-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}
</style>
