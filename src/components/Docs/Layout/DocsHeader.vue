<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header-logo">
                <span class="header-logo__name text-heading-6">Finger UI</span>
                <span class="header-logo__version text-body-s">v1.0.0</span>
            </div>

            <div class="header-menu">
                <div class="header-socials">
                    <a
                        v-for="social in socials"
                        :key="social.name"
                        :href="social.link"
                        class="header-socials__item"
                    >
                        <SvgIcon :width="20" :height="20">
                            <Component :is="social.icon" />
                        </SvgIcon>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon.vue';
import IconGithub from '@/icons/socials/IconGithub.vue';
import IconTelegram from '@/icons/socials/IconTelegram.vue';
import { ref, type Component } from 'vue';

interface Social {
    name: string;
    link: string;
    icon: Component;
}

const socials = ref<Social[]>([
    { name: 'Github', link: '#', icon: IconGithub },
    { name: 'Telegram', link: '#', icon: IconTelegram }
]);
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.header {
    height: 68px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid getColor('base-04');

    &__wrapper {
        padding-left: 40px;
        padding-right: 40px;

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.header-logo {
    display: flex;
    align-items: center;
    gap: 16px;
}

.header-socials {
    display: flex;
    align-items: center;
    gap: 12px;
}
</style>
