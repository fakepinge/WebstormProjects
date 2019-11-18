<template>
    <div id="view" style="background-color: white">
        <!--筛选-->
        <div id="screen" class="rowLeftMiddleStyle screenContentDiv">
            <div id="screenLeft" class="rowLeftMiddleStyle" style="height: 100%">
                <screen-item v-for="(item,index) in screenList" :title="item" :type="index"></screen-item>
            </div>
            <div id="screenRight" class="rowRightMiddleStyle rightContentDiv">
                <div @click="moreClick()" class="rowCenterStyle screenMore">更多</div>
                <div @click="searchClick()" class="rowCenterStyle screenMore">查询</div>
            </div>
        </div>
        <!--头部-->
        <div id="header" class="rowLeftMiddleStyle headerContentDiv">
            <div class="rowLeftBottomStyle" style="margin-bottom: -10px">
                <div class="rowCenterStyle headerCaseItem" style="margin-left: 15px">出售</div>
                <div class="rowCenterStyle headerCaseItem" style="margin-left: 10px">出租</div>
            </div>
            <div class="rowLeftMiddleStyle" style="margin-left: 30px; height: 100%">
                <header-check v-for="(item) in checkList" :title="item"></header-check>
            </div>
            <div class="rowRightMiddleStyle rightContentDiv">
                <row-button class="headerRowButton" title="登记" :img="require('@/assets/image/登记.png')" color="#3396fb"></row-button>
                <row-button class="headerRowButton" title="跟进日志" :img="require('@/assets/image/登记.png')" color="#3396fb"></row-button>
                <div class="rowLeftMiddleStyle" style="height: 100%; margin-right: 35px">
                    <row-button title="筛选：" :img="require('@/assets/image/登记.png')" color="#3396fb"></row-button>
                    <span style="color: rgb(51,51,51); font-size: 12px">默认</span>
                </div>
                <row-button class="headerRowButton" title="排序" :img="require('@/assets/image/登记.png')" color="#3396fb"></row-button>
                <span style="color: rgb(153,153,153); font-size: 13px; margin-right: 25px">共{{numCount}}条</span>
                <div class="rowCenterStyle headerSwitchDiv" style="background-color: rgb(200,200,200)">
                    <img class="headerSwitchImg" src="../assets/image/宽列表.png">
                </div>
                <div class="rowCenterStyle headerSwitchDiv" style="margin-right: 7px">
                    <img class="headerSwitchImg" src="../assets/image/窄列表.png" >
                </div>
            </div>
        </div>
        <!--列表-->
        <div id="listView" class="columnCenterStyle">
            <div class="columnLeftTopStyle listItemDiv" v-for="(house) in houseList" @click="houseDetailClick(house)">
                <div class="rowLeftMiddleStyle listItemContentDiv">
                    <house-list-item-base v-if="house" :house="house"></house-list-item-base>
                    <house-detail-item-detail v-if="house" :house="house"></house-detail-item-detail>
                    <div class="rowCenterStyle workflowInfoDiv" style="width: 22%; height: 100%;">
                        <div class="rowLeftMiddleStyle" style="height:60%;" v-for="(item,index) in workflowList">
                            <workflow-item style="height:100%;" :img="item.img" :title="item.title" :count="item.count"></workflow-item>
                            <div v-if="showWorkflow(index)" style="margin-bottom: 47px; height: 1px; width: 20px; background-color: rgb(210,210,210)"></div>
                        </div>
                    </div>
                    <div class="columnLeftTopStyle deptInfoDiv" style="width: 22%; height: 100%;">
                        <row-button style="margin-top: 18px; height: 50px" :img="require('@/assets/image/公.png')" :title="house.deptCname" color="rgb(153,153,153)" font="16px" margin="10px"></row-button>
                        <div class="rowLeftMiddleStyle" style="margin-top: 15px; height: 50px">
                            <row-button style="margin-right: 15px" :img="require('@/assets/image/人员.png')" title="小区专家" color="rgb(153,153,153)" font="14px"></row-button>
                            <row-button style="margin-right: 15px" :img="require('@/assets/image/真.png')" title="真房源" color="rgb(153,153,153)" font="14px"></row-button>
                            <row-button style="margin-right: 15px" :img="require('@/assets/image/合作.png')" title="分享合作" color="rgb(153,153,153)" font="14px"></row-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import dataJson from "../assets/source/houseListData.json"
    import ScreenItem from '../components/ScreenItem.vue'
    import HeaderCheck  from '../components/HeaderCheck.vue'
    import RowButton  from '../components/RowButton.vue'
    import HouseListItemBase  from '../components/HouseListItemBase.vue'
    import HouseDetailItemDetail  from '../components/HouseDetailItemDetail.vue'
    import WorkflowItem  from '../components/WorkflowItem.vue'

    export default {
        name: "House",
        components: {
            ScreenItem,
            HeaderCheck,
            RowButton,
            HouseListItemBase,
            HouseDetailItemDetail,
            WorkflowItem,
        },
        data() {
            return {
                numCount: 13,
                screenList: ["全公司", "员工", "区域", "楼盘", "户型", "面积", "总价", "时间"],
                checkList: ["合作房源", "今日抢盘", "我的收藏"],
                workflowList: [{
                    title: "房勘",
                    count: "1",
                    img: require('@/assets/image/带看.png'),
                }, {
                    title: "空看",
                    count: "0",
                    img: require('@/assets/image/带看-灰.png'),
                }, {
                    title: "带看",
                    count: "3",
                    img: require('@/assets/image/带看.png'),
                }, {
                    title: "议价",
                    count: "0",
                    img: require('@/assets/image/带看-灰.png'),
                }, {
                    title: "预订",
                    count: "0",
                    img: require('@/assets/image/带看-灰.png'),
                },],
                houseList: [],
                deptList: [],
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData: function () {
                let json = dataJson
                let deptList = json.data.deptList
                let map = new Map()
                for (let i = 0; i < deptList.length; i++) {
                    let dept = deptList[i]
                    map.set(dept.deptId, dept.deptCname)
                }
                let saleList = json.data.saleList
                for (let i = 0; i < saleList.length; i++) {
                    let house = saleList[i]
                    house.deptCname = map.get(house.deptId)
                }
                this.houseList = json.data.saleList
            },
            showWorkflow: function (index) {
                let arr = this.workflowList
                return index < (arr.length - 1)
            },
            moreClick: function () {
                alert('更多')
            },
            searchClick: function () {
                alert('查询')
                this.numCount = 200
            },
            houseDetailClick(house) {
                // this.$router.push({
                //     path: '/house_detail',
                //     query:{
                //         house:JSON.stringify(house),
                //     }
                // })
                this.$router.push({
                    name: 'house_detail',
                    params: {
                        house: JSON.stringify(house),
                    }
                })
            }
        },
    }

</script>

<style scoped>
    .screenContentDiv {
        background-color: rgb(47, 158, 240);
        height: 35px;
    }

    .rightContentDiv {
        flex: 1;
        height: 100%;
    }

    .screenMore {
        color: white;
        background-color: rgb(25, 147, 235);
        border: 1px solid black;
        border-radius: 4px;
        width: 40px;
        height: 55%;
        font-size: 12px;
        margin-right: 10px;
        cursor: pointer;
    }

    .headerContentDiv {
        background-color: rgb(244, 244, 244);
        height: 35px;
        border-bottom: 1px solid rgb(153, 153, 153);
        box-shadow: 0px 5px 5px rgba(51, 51, 51, 0.2);
    }

    .headerCaseItem {
        background-color: white;
        border-top: 1px solid rgba(153, 153, 153, 0.8);
        border-left: 1px solid rgba(153, 153, 153, 0.8);
        border-right: 1px solid rgba(153, 153, 153, 0.8);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: 25px;
        width: 60px;
        font-size: 15px;
        cursor: pointer;
    }

    .headerRowButton {
        margin-right: 20px;
    }

    .headerSwitchDiv {
        border: 1px solid rgb(153, 153, 153);
        border-radius: 2px;
        width: 27px;
        height: 20px;
        margin-right: 1px;
    }

    .headerSwitchImg {
        width: 17px;
        height: 17px;
        cursor: pointer;
    }

    .listItemDiv {
        width: 100%;
        height: 150px;
        background-color: rgb(237, 243, 251);
    }

    .listItemContentDiv {
        width: 100%;
        height: 145px;
        background-color: white;
    }

</style>