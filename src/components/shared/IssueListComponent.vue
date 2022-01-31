<template>
    <section class="issue-list">
        <p class="issues-title">{{ state.title }}</p>
        <div class="issue-list-container">
            <IssueListItemComponent
                v-for="(issue) in state.issueList"
                :key="issue.id"
                :issue="issue"
            ></IssueListItemComponent>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import IssueListItemComponent from '../../components/shared/issueList/IssueListItemComponent.vue'

const props = defineProps({
    heading: String,
    issueListData: Object
})
const state = reactive({
    title: props.issueListData?.title,
    issueList: props.issueListData?.issueList
})

</script>

<style lang="scss" scoped>
.issue-list {
    margin-top: 16px;
    .issues-title {
        color: $text-muted;
        margin-bottom: 1rem;
        font-weight: 500;
    }
    .issue-list-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        grid-gap: 1rem;
    }
}
</style>