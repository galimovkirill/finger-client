<template>
    <div class="sidebar-group">
        <DocsSidebarItem
            primary
            dropdown
            :dropdown-shown="isDropdownShown"
            @click="isDropdownShown = !isDropdownShown"
        >
            <template #icon>
                <SvgIcon>
                    <Component :is="headIcon" />
                </SvgIcon>
            </template>

            {{ headTitle }}
        </DocsSidebarItem>

        <div v-if="isDropdownShown" class="sidebar-group__list">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DocsSidebarItem from '@/components/Docs/Layout/Sidebar/DocsSidebarItem.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref, type Component } from 'vue';

export interface Props {
    headIcon: Component;
    headTitle: string;
}

defineProps<Props>();

const isDropdownShown = ref(false);
</script>

<style lang="scss">
.sidebar-group {
    &__list {
        padding-left: calc(18px + 8px);
    }
}
</style>
