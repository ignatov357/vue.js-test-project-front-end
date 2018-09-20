<template>
    <div id="app" v-if="$store.state.loaded">
        <vue-snotify></vue-snotify>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>