<template>
    <div class="rowCenterStyle headerCheckItem" style="height: 100%">
        <input type="checkbox" style="cursor: pointer;">
        <span style="font-size: 14px; margin-left: 3px">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "HeaderCheck",
        props:{
            title:{

            },
        }
    }
</script>

<style scoped>
    .headerCheckItem {
        margin-right: 10px;
    }
</style>