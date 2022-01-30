<template>
    <header id="app_header">
        <div class="logo">Tilig</div>
        <div class="menu">Menu</div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#app_header {
    height: 54px;
    background: $black;
    color: $white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;

    .logo {
        flex: 1;
    }
}
</style>