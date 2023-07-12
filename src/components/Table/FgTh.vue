<template>
    <th class="fg-th">
        <slot></slot>
    </th>
</template>

<style lang="scss">
.fg-th {
    padding: var(--fg-table-padding-y) var(--fg-table-padding-x);

    &:first-child {
        border-top-left-radius: var(--fg-table-border-radius);
    }

    &:last-child {
        border-top-right-radius: var(--fg-table-border-radius);
    }
}
</style>
