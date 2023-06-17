<template>
    <div class="account-create-card">Создать новый счет</div>
</template>

<style lang="scss">
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/typography.scss';

.account-create-card {
    @extend .text-body-s;

    border: 1px solid getColor('base-04');
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: 0.2s ease;

    &:hover {
        background-color: getColor('base-02');
    }
}
</style>
