<template>
    <main class="centered-layout">
        <RouterView />
    </main>
</template>

<style lang="scss">
.centered-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    height: 100%;
}
</style>
