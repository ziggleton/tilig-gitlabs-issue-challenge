<template>
    <section class="issue-list">
        <h4 class="issues-title">{{ state.title }}</h4>
    </section>
</template>

<script setup>
import { computed, defineProps, reactive } from 'vue';
const props = defineProps({
    title: String,
    issueList: Array
})

const state = reactive({
    title: computed(() => {
        if (!props.title) return 'Default title'
    })
})

</script>

<style lang="scss" scoped>
.issue-list {
    margin-top: 16px;
}
</style>