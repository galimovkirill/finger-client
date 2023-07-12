<template>
    <td class="fg-td">
        <slot></slot>
    </td>
</template>

<style lang="scss">
.fg-td {
    padding: var(--fg-table-padding-y) var(--fg-table-padding-x);

    &:first-child {
        border-top-left-radius: var(--fg-table-border-radius);
        border-bottom-left-radius: var(--fg-table-border-radius);
    }

    &:last-child {
        border-top-right-radius: var(--fg-table-border-radius);
        border-bottom-right-radius: var(--fg-table-border-radius);
    }
}
</style>
