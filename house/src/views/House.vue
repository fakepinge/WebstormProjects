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
                <row-button class="headerRowButton" title="登记" img="../assets/image/登记.png" color="#3396fb"></row-button>
                <row-button class="headerRowButton" title="跟进日志" img="../assets/image/登记.png" color="#3396fb"></row-button>
                <div class="rowLeftMiddleStyle" style="height: 100%; margin-right: 35px">
                    <row-button title="筛选：" img="../image/登记.png" color="#3396fb"></row-button>
                    <span style="color: rgb(51,51,51); font-size: 12px">默认</span>
                </div>
                <row-button class="headerRowButton" title="排序" img="../assets/image/登记.png" color="#3396fb"></row-button>
                <span style="color: rgb(153,153,153); font-size: 13px; margin-right: 25px">共{{numCount}}条</span>
                <div class="rowCenterStyle headerSwitchDiv" style="background-color: rgb(200,200,200)">
                    <img class="headerSwitchImg" src="../assets/image/宽列表.png">
                </div>
                <div class="rowCenterStyle headerSwitchDiv" style="margin-right: 7px">
                    <img class="headerSwitchImg" src="../assets/image/窄列表.png" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ScreenItem from '../components/ScreenItem.vue'
    import HeaderCheck  from '../components/HeaderCheck.vue'
    import RowButton  from '../components/RowButton.vue'
    export default {
        name: "House",
        components: {
            ScreenItem,
            HeaderCheck,
            RowButton,
        },
        data() {
            return {
                numCount: 13,
                screenList: ["全公司", "员工", "区域", "楼盘", "户型", "面积", "总价", "时间"],
                checkList: ["合作房源", "今日抢盘", "我的收藏"],
                workflowList: [{
                    title: "房勘",
                    count: "1",
                    img: "../assets/image/带看.png",
                }, {
                    title: "空看",
                    count: "0",
                    img: "../assets/image/带看-灰.png",
                }, {
                    title: "带看",
                    count: "3",
                    img: "../assets/image/带看.png",
                }, {
                    title: "议价",
                    count: "0",
                    img: "../assets/image/带看-灰.png",
                }, {
                    title: "预订",
                    count: "0",
                    img: "../assets/image/带看-灰.png",
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
                this.readTextFile("../assets/source/houseListData.json", (text) => {
                    let json = JSON.parse(text)
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
                })
            },
            readTextFile: function (file, callback) {
                let rawFile = new XMLHttpRequest()
                rawFile.overrideMimeType("application/json")
                rawFile.open("GET", file, true)
                rawFile.onreadystatechange = function () {
                    if (rawFile.readyState === 4 && rawFile.status == "200") {
                        callback(rawFile.responseText)
                    }
                }
                rawFile.send(null)
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
                headerVue.numCount = 200
            },
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

    .screenItem {
        height: 100%;
        width: 90px;
        cursor: pointer;
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

    .headerCheckItem {
        margin-right: 10px;
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

    .listItemHouseImage {
        margin-left: 20px;
        width: 140px;
        height: 115px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .listItembBaseIconImg {
        width: 20px;
        height: 15px;
        border: 1px solid rgb(153, 153, 153);
        border-radius: 2px;
        margin-right: 5px;
    }

</style>