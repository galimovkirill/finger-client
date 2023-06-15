<template>
    <div class="fg-button-group">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.fg-button-group {
    display: flex;

    .fg-button {
        &:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        &--border:not(:first-child) {
            margin-left: -2px;
        }
    }
}
</style>
