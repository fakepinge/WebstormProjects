<template>
    <div style="background-color: red; height: 500px"></div>
</template>

<script>
    export default {
        name: "HouseDetail",
        created() {
            alert(this.$route.params.house)
        }
    }
</script>

<style scoped>

</style>