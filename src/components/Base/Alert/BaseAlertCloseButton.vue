<template>
    <div class="fg-alert-close"></div>
</template>

<style lang="scss">
.fg-alert-close {
    width: 32px;
    height: 32px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.25s ease;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 16px;
        background-color: rgb(var(--color-mode));
        transition: 0.3s ease;
    }

    &::after {
        transform: rotate(45deg);
    }

    &::before {
        transform: rotate(-45deg);
    }

    &:hover {
        box-shadow: 0 5px 18px 0 rgba(var(--color-mode), 0.15);
        transform: translateY(-2px);

        &::after {
            transform: rotate(90deg);
        }

        &::before {
            transform: rotate(-90deg);
        }
    }
}
</style>
