<template>
    <div class="rowLeftMiddleStyle screenItem" @click="screenItemClick(type+1, title)">
        <img src="../assets/image/公司.png" style="width: 15px; height: 15px; margin-left: 5px">
        <span style="font-size: 13px; margin-left: 5px">{{title}}</span>
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; flex: 1;">
            <img src="../assets/image/展开.png" style="width: 10px; height: 10px; margin-right: 5px">
        </div>
        <div style="width: 1px; height: 50%; background-color: rgba(87,87,87,0.86)">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScreenItem",
        props:{
            title:{

            },
            type:{

            },
        },
        // props: {
        //     img: {
        //         type: String,
        //     },
        //     title: {
        //         type: String,
        //         default: 'text',
        //     },
        //     color: {
        //         type: String,
        //     },
        //     font: {
        //         type: String,
        //         default: '12px',
        //     },
        //     margin: {
        //         type: String,
        //         default: '3px',
        //     },
        // },
        methods: {
            screenItemClick(type, title) {
                alert("点击了第"+ type.toString() + "项 => " + title)
            },
        }
    }
</script>

<style scoped>

</style>