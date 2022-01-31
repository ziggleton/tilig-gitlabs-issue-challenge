<template>
    <AppHeaderComponent></AppHeaderComponent>
    <div class="main-content">
        <h3 class="page-title">Gitlab Issues Emoji</h3>
        <IssueListComponent :issueListData="state.issuesWithMilestones"></IssueListComponent>
        <IssueListComponent :issueListData="state.issuesWithOutMilestones"></IssueListComponent>
    </div>
</template>
<script setup>
import AppHeaderComponent from './components/shared/AppHeaderComponent.vue'
import IssueListComponent from './components/shared/IssueListComponent.vue'

import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
const store = useStore()

store.dispatch('getIssues')

let state = reactive({
    issues: computed(() => {
        return store.state.issues.issues
    }),
    issuesWithOutMilestones: computed(() => {
        let issueListData = {
            title: 'Issues without milestones',
            issueList: state.issues.filter(issue => {
                if (issue.milestone == null) {
                    return issue
                }
            })
        }
        return issueListData
    }),
    issuesWithMilestones: computed(() => {
        let issueListData = {
            title: 'Issues with milestones',
            issueList: state.issues.filter(issue => {
                if (issue.milestone != null) {
                    return issue
                }
            })
        }
        return issueListData
    })
})
</script>
<style lang="scss">
@import "./assets/scss/index.scss";
</style>