<template>
    <div class="columnCenterTopStyle" style="width: 35px">
    <img style="margin-top: 5px" :src="img">
    <span style="margin-top: 5px; color: rgb(153,153,153); font-size: 13px">{{title}}</span>
    <span v-if="showCount" style="margin-top: 6px; color: rgb(251,125,89); font-size: 14px">{{count}}次</span>
    </div>
</template>

<script>
    export default {
        name: "WorkflowItem",
        props:{
            img:{},
            title:{},
            count:{},
        },
        computed:{
            showCount() {
                return this.count > 0
            },
        },
    }
</script>

<style scoped>

</style>