<template>
    <AppHeaderComponent></AppHeaderComponent>
    <div class="main-content">
        <h3 class="page-title">Gitlab Issues Emoji</h3>
        <IssueListComponent></IssueListComponent>
    </div>
</template>
<script setup>
import AppHeaderComponent from './components/shared/AppHeaderComponent.vue';
import IssueListComponent from './components/shared/IssueListComponent.vue';
</script>
<style lang="scss">
@import "./assets/scss/index.scss";
</style>