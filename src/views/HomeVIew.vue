<template>
    <div>
        <div class="container">
            <AccountGrid>
                <AccountCard v-for="(card, index) in cards" :key="index" :data="card" />
                <AccountCreateCard />
            </AccountGrid>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AccountCard from '@/components/Account/AccountCard.vue';
import AccountCreateCard from '@/components/Account/AccountCreateCard.vue';
import type { IAccountCard } from '@/components/Account/AccountCard.vue';
import AccountGrid from '@/components/Account/AccountGrid.vue';
import { ref } from 'vue';

const cards = ref<IAccountCard[]>([
    { title: 'Наличные', balance: 89960 },
    { title: 'Deniz Bank', balance: 285 },
    { title: 'Tinkoff Bank', balance: 113209 },
    { title: 'Bitcoin', balance: 10366 },
    { title: 'Финансовая подушка', balance: 69333 },
    { title: 'На путешествия', balance: 3200 }
]);
</script>
