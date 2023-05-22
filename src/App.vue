<template>
    <div class="app">
        <Component :is="layout">
            <RouterView />
        </Component>
    </div>
</template>

<script lang="ts" setup>
import { capitalize, computed, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const layout = computed(() => {
    const layoutFromMeta = router.currentRoute.value.meta.layout || 'default';
    const layoutName = `${capitalize(layoutFromMeta)}Layout`;

    return defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`));
});
</script>

<style lang="scss"></style>
