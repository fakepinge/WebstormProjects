<template>
    <div class="rowLeftMiddleStyle detailInfoDiv" style="width: 22%; height: 100%;">
    <div class="columnLeftMiddleStyle" style="width: 100%; height: 115px;">
        <div class="rowLeftMiddleStyle">
            <span style="font-size: 20px; color: rgb(51,51,51)">{{house.buildName}}</span>
            <span style="margin-left: 2px; font-size: 14px; color: rgb(153,153,153)">[{{house.sectionName}}]</span>
            <img src="../assets/image/地图.png" style="margin-left: 5px">
            </div>
        <div class="rowLeftMiddleStyle" style="height: 55px;">
            <span style="font-size: 16px; color: rgb(153,153,153)">{{house.saleRoom}}室{{house.saleHall}}厅{{house.saleWei}}卫 {{house.saleArea}}㎡ {{house.saleTotalPrice}}万 {{house.saleUnitPrice}}元/㎡</span>
            </div>
        <div class="rowLeftMiddleStyle">
            <div class="rowLeftMiddleStyle" style="height: 100%; margin-right: 5px" v-for="(name, index) in iconNameList">
                <row-button :title="name" :img="require('@/assets/image/跟进记录.png')" color="rgb(78,194,238)"></row-button>
                <div v-if="showVline(index)" style="margin-left: 3px; width: 1px; height: 80%; background-color: #4EC2EE"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RowButton from '../components/RowButton.vue'
    export default {
        name: "HouseDetailItemDetail",
        props:{
            house:{
                type:Object,
            }
        },
        components:{
            RowButton,
        },
        data(){
            return {
                iconNameList:["跟进", "匹配", "上传", "提交钥匙", "收藏"],
            }
        },
        methods:{
            showVline(index) {
                return index < (this.iconNameList.length - 1)
            },
        }
    }
</script>

<style scoped>

</style>