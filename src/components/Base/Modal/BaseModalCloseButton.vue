<template>
    <button type="button" class="fg-modal-close"></button>
</template>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-modal-close {
    background-color: getColor('base-01');
    width: 40px;
    height: 40px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 16px;
    transition: all 0.25s ease;
    box-shadow: 0 5px 18px 0 getColor('base-07', 0.15);

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 16px;
        background-color: getColor('base-07');
        transition: 0.3s ease;
    }

    &::after {
        transform: rotate(45deg);
    }

    &::before {
        transform: rotate(-45deg);
    }

    &:hover {
        &::after {
            transform: rotate(90deg);
        }

        &::before {
            transform: rotate(-90deg);
        }
    }
}
</style>
