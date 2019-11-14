<template>
    <div class="rowLeftMiddleStyle" style="height: 100%; cursor: pointer">
        <img :src="img">
        <span :style="{color:color, marginLeft:margin, fontSize:font}">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "RowButton",
        props: {
            img: {
            },
            title: {
            },
            color: {
            },
            font: {
                type: String,
                default: '12px',
            },
            margin: {
                type: String,
                default: '3px',
            },
        },
    }
</script>

<style scoped>

</style>