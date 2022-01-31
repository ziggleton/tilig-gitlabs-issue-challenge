<template>
    <div class="list-item" @click="changeEmoji">
        <div class="emoji">
            <span>{{ state.randomEmoji.emoji }}</span>
        </div>
        <div class="content">
            <h4 class="item-title">{{ state.issue.title }}</h4>
            <p v-if="state.issue.milestone">Milestone: {{ state.issue.milestone.title }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const props = defineProps({
    issue: Object
})
const state = reactive({
    issue: props.issue,
    emojiList: store.state.issues.emojis,
    randomEmoji: computed(() => {
        return state.emojiList[Math.floor(Math.random() * state.emojiList.length)]
    })
})
const changeEmoji = () => {
    // will explain this
}
</script>

<style lang="scss" scoped>
.list-item {
    background: $brand-primary;
    color: $white;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    min-height: 90px;
    overflow: hidden;
    .emoji {
        width: 46px;
        background: $black;
        display: flex;
        padding: 0px 16px;
        flex-direction: row;
        align-items: center;
    }
    .content {
        padding: 8px;
        flex: 1;
    }
}
</style>