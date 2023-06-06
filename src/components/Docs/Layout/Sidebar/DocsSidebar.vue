<template>
    <aside class="sidebar">
        <div class="sidebar__wrapper">
            <template v-for="(item, highLevelIndex) in items" :key="item.name">
                <DocsSidebarItem
                    v-if="item.subItems.length === 0"
                    primary
                    :active="isActive(highLevelIndex, -1)"
                    @click="setActive(highLevelIndex, -1)"
                >
                    <template #icon>
                        <SvgIcon>
                            <Component :is="item.icon" />
                        </SvgIcon>
                    </template>

                    {{ item.name }}
                </DocsSidebarItem>

                <DocsSidebarGroup v-else :head-icon="item.icon" :head-title="item.name">
                    <template #list>
                        <DocsSidebarItem
                            v-for="(sub, lowLevelIndex) in item.subItems"
                            :key="sub.name"
                            :active="isActive(highLevelIndex, lowLevelIndex)"
                            @click="setActive(highLevelIndex, lowLevelIndex)"
                        >
                            {{ sub.name }}
                        </DocsSidebarItem>
                    </template>
                </DocsSidebarGroup>
            </template>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import DocsSidebarGroup from '@/components/Docs/Layout/Sidebar/DocsSidebarGroup.vue';
import DocsSidebarItem from '@/components/Docs/Layout/Sidebar/DocsSidebarItem.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconDashboard from '@/icons/IconDashboard.vue';
import { ref, type Component, shallowRef } from 'vue';

interface ActiveItem {
    highLevelIndex: number;
    lowLevelIndex: number;
}

interface SidebarSubItem {
    name: string;
}

interface SidebarItem {
    name: string;
    icon: Component;
    subItems: SidebarSubItem[];
}

const active = ref<ActiveItem>({
    highLevelIndex: 0,
    lowLevelIndex: -1
});

const items = shallowRef<SidebarItem[]>([
    {
        name: 'Getting Started',
        icon: IconDashboard,
        subItems: []
    },
    {
        name: 'Components',
        icon: IconDashboard,
        subItems: [{ name: 'Avatar' }, { name: 'Alert' }, { name: 'Button' }]
    }
]);

const setActive = (high: number, low: number) => {
    active.value.highLevelIndex = high;
    active.value.lowLevelIndex = low;
};

const isActive = (high: number, low: number) => {
    if (high !== active.value.highLevelIndex) {
        return false;
    }

    if (low !== active.value.lowLevelIndex) {
        return false;
    }

    return true;
};
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.sidebar {
    width: 100%;
    border-right: 1px solid getColor('base-04');

    &__wrapper {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}
</style>
