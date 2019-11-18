<template>
    <div class="columnCenterStyle">
    <div class="rowCenterStyle">
        <span style="color: rgb(251,125,89); font-size: 20px">{{qualityScore}}</span>
        <span style="color: rgb(251,125,89); font-size: 12px">分</span>
        </div>
    <span style="color: rgb(153,153,153); font-size: 12px">房源质量</span>
    </div>
</template>

<script>
    export default {
        name: "ScoreLabel",
        props:{
            qualityScore:{
                type:Number,
                default:0
            }
        }
    }
</script>

<style scoped>

</style>