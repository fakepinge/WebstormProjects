<template>
    <div id="view" style="background-color: white">
        <!--筛选-->
        <div id="screen" class="rowStartStyle screenContent">
            <div id="screenLeft" class="rowStartStyle">
                <screenitemdiv v-for="(item,index) in screenList" :title="item" :type="index"></screenitemdiv>
            </div>
            <div id="screenRight" class="rowStartStyle rightContentStyle">
                <div @click="moreClick()" class="screenMore">更多</div>
                <div @click="searchClick()" class="screenMore">查询</div>
            </div>
        </div>
        <!--头部-->
        <div id="header" class="rowStartStyle headerContent">
            <div class="rowStartStyle" style="align-items: flex-end;">
                <div class="rowCenterStyle switchItem" style="margin-left: 15px">出售</div>
                <div class="rowCenterStyle switchItem" style="margin-left: 10px">出租</div>
            </div>
            <div class="rowStartStyle" style="margin-left: 30px">
                <headercheckdiv v-for="(item,index) in checkList" :title="item" :type="index"></headercheckdiv>
            </div>
            <div class="rowStartStyle rightContentStyle">
                <rowtextbutton class="headerRowButton" title="登记" img="../image/登记.png" color="#3396fb"></rowtextbutton>
                <rowtextbutton class="headerRowButton" title="跟进日志" img="../image/登记.png" color="#3396fb"></rowtextbutton>
                <div class="rowStartStyle" style="margin-right: 35px">
                    <rowtextbutton title="筛选：" img="../image/登记.png" color="#3396fb"></rowtextbutton>
                    <span style="color: rgb(51,51,51); font-size: 12px">默认</span>
                </div>
                <rowtextbutton class="headerRowButton" title="排序" img="../image/登记.png" color="#3396fb"></rowtextbutton>
                <span style="color: rgb(153,153,153); font-size: 13px; margin-right: 25px">共{{numCount}}条</span>
                <div class="rowCenterStyle headerSwitchDiv" style="background-color: rgb(200,200,200)">
                    <img class="headerSwitchImg" src="../image/宽列表.png">
                </div>
                <div class="rowCenterStyle headerSwitchDiv" style="margin-right: 7px">
                    <img class="headerSwitchImg" src="../image/窄列表.png" >
                </div>
            </div>
        </div>
        <!--列表-->
        <div id="listView" class="columnCenterStyle">
            <div class="columnStartStyle listItemDiv" v-for="(house,index) in houseList">
                <div class="rowStartStyle listItemContentDiv">
                    <list_item_base_div v-if="house" :house="house"></list_item_base_div>
                    <div class="rowStartStyle detailInfoDiv" style="width: 22%; height: 100%; background-color: #900cff">

                    </div>
                    <div class="rowStartStyle workflowInfoDiv" style="width: 22%; height: 100%; background-color: darkred">

                    </div>
                    <div class="rowStartStyle deptInfoDiv" style="width: 22%; height: 100%; background-color: aqua">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var row_text_button = Vue.extend({
            props: ['img', 'title', 'color', 'marginLeft'],
            template:'' +
                '<div class="rowStartStyle">' +
                '<img :src="img">' +
                '<span :style="{color:color, marginLeft:\'3px\', fontSize:\'12px\'}">{{title}}</span>' +
                '</div>',
        })
        Vue.component('rowtextbutton', row_text_button)

        var screen_item_cpt = Vue.extend({
            props: ['title', 'type'],
            template: '' +
                '<div class="screenItem" @click="screenItemClick(type+1, title)">' +
                '<img src="../image/公司.png" style="width: 15px; height: 15px; margin-left: 5px">' +
                '<span style="font-size: 13px; margin-left: 5px">{{title}}</span>' +
                '<div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; flex: 1;">' +
                '<img src="../image/展开.png" style="width: 10px; height: 10px; margin-right: 5px">' +
                '</div>' +
                '<div style="width: 1px; height: 50%; background-color: rgba(87,87,87,0.86)">' +
                '</div>' +
                '</div>',
            methods:{
                screenItemClick:function (type, title) {
                    alert("点击了第"+ type.toString() + "项 => " + title)
                },
            }
        })

        var header_check_cpt = Vue.extend({
            props: ['title', 'type'],
            template: '' +
                '<div class="rowCenterStyle checkItem">' +
                '<input type="checkbox">' +
                '<span style="font-size: 14px; margin-left: 3px">{{title}}</span>' +
                '</div>'
        })

        var screenVue = new Vue({
            el:"#screen",
            components:{
                'screenitemdiv': screen_item_cpt
            },
            data:{
                screenList:["全公司", "员工", "区域", "楼盘", "户型", "面积", "总价", "时间"]
            },
            methods:{
                moreClick:function () {
                    alert('更多')
                },
                searchClick:function () {
                    alert('查询')
                    headerVue.numCount = 200
                },
            }
        })

        var headerVue = new Vue({
            el:"#header",
            components:{
                'headercheckdiv': header_check_cpt
            },
            data:{
                checkList:["合作房源", "今日抢盘", "我的收藏"],
                numCount:13,
            },
            methods:{

            }
        })

        var score_text_label_cmp = Vue.extend({
            props: ['qualityScore'],
            template:'' +
                '<div class="columnCenterStyle">' +
                '<div class="rowCenterStyle">' +
                '<span style="color: rgb(251,125,89); font-size: 20px">{{qualityScore}}</span>' +
                '<span style="color: rgb(251,125,89); font-size: 12px">分</span>' +
                '</div>' +
                '<span style="color: rgb(153,153,153); font-size: 12px">房源质量</span>' +
                '</div>',
        })

        var list_item_base_div_cmp = Vue.extend({
            props:['house'],
            template: '' +
                '<div class="rowStartStyle baseInfoDiv" style="flex: 1">' +
                '<div class="rowStartStyle">' +
                '<img onerror=\'this.src="../image/global_image_placeholder_load.png"\' class="houseImage" :src="house.thumbUrl">' +
                '</div>' +
                '<div class="rowStartStyle" style="flex: 1; align-items: flex-start">' +
                '<div class="columnStartStyle" style="height: 105px;margin-top: 20px; margin-left: 5px; justify-content: flex-start">' +
                '<span style="color:rgb(51,51,51); font-size: 18px;">{{house.saleSubject}}</span>' +
                '<div class="columnStartStyle" style="justify-content: flex-end; width: 100%; flex: 1">' +
                '<span style="color:rgb(153,153,153); font-size: 12px; margin-bottom: 5px">{{subSubject(house)}}</span>' +
                '<div class="rowStartStyle" style="height: 20px; width: 100%">' +
                '<div class="rowCenterStyle baseIconImg">' +
                '<img src="../image/钥匙.png">' +
                '</div>' +
                '<div class="rowCenterStyle baseIconImg">' +
                '<img src="../image/视频.png">' +
                '</div>' +
                '<div class="rowCenterStyle baseIconImg">' +
                '<img src="../image/VR.png">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="rowCenterStyle" style="width: 100px;">' +
                '<score_text_label :qualityScore="house.qualityScore"></score_text_label>' +
                '</div>' +
                '</div>',
            components:{
                'score_text_label': score_text_label_cmp,
            },
            methods:{
                subSubject:function (house) {
                    return house.buildName + " " + house.regionName + " " + house.sectionName
                }
            },
        })

        var listVue = new Vue({
            el:"#listView",
            components:{
                'list_item_base_div':list_item_base_div_cmp,
            },
            data:{
                houseList:[
                    //     {
                    //     thumbUrl:"http://pic.myfun7.com/oss/online/tmp/2019/11/07/d68fe689210f4019a98f8e9e63069d44.png",
                    //     qualityScore:40,
                    //     saleSubject:"房子不错，采光好，通风好，对中庭",
                    //     buildName:"芳园居",
                    //     regionName: "双流",
                    //     sectionName: "航空港",
                    // }
                ]
            },
            created() {
                this.getData()
            },
            methods:{
                getData:function () {
                    this.readTextFile("../source/houseListData.json", (text)=>{
                        let json=JSON.parse(text);
                        // this.$set(this,'houseList',json.data.saleList)
                        this.houseList=json.data.saleList
                        console.dir(this.houseList)
                    })
                },
                readTextFile:function (file, callback) {
                    var rawFile = new XMLHttpRequest()
                    rawFile.overrideMimeType("application/json")
                    rawFile.open("GET", file, true)
                    rawFile.onreadystatechange = function() {
                        if (rawFile.readyState === 4 && rawFile.status == "200") {
                            callback(rawFile.responseText)
                        }
                    }
                    rawFile.send(null)
                },
            }
        })
    </script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .rowStartStyle {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
        }
        .rowStartStyle.screenContent {
            background-color: rgb(47,158,240);
            height: 35px;
        }
        .rowStartStyle.rightContentStyle {
            flex: 1;
            justify-content: flex-end;
        }
        .screenItem {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
            width: 90px;
        }
        .screenMore {
            color: white;
            background-color: rgb(25,147,235);
            border: 1px solid black;
            border-radius: 4px;
            width: 40px;
            height: 55%;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px
        }
        .rowStartStyle.headerContent {
            background-color: rgb(244,244,244);
            height: 35px;
            border-bottom: 1px solid rgb(153,153,153);
            box-shadow: 0px 5px 5px rgba(51, 51, 51, 0.2);
        }
        .rowCenterStyle {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        .rowCenterStyle.switchItem {
            background-color: white;
            border-top: 1px solid rgba(153, 153, 153, 0.8);
            border-left: 1px solid rgba(153, 153, 153, 0.8);
            border-right: 1px solid rgba(153, 153, 153, 0.8);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            height: 25px;
            width: 60px;
            margin-bottom: -1px;
            font-size: 15px;
        }
        .rowCenterStyle.checkItem {
            margin-right: 10px;
        }
        .headerRowButton {
            margin-right: 20px;
        }
        .headerSwitchDiv {
            border: 1px solid rgb(153,153,153);
            border-radius: 2px;
            width: 27px;
            height: 20px;
            margin-right: 1px;
        }
        .headerSwitchImg {
            width: 17px;
            height: 17px;
        }
        .columnCenterStyle {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .columnStartStyle {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
        .columnStartStyle.listItemDiv {
            justify-content: start;
            width: 100%;
            height: 150px;
            background-color: rgb(237,243,251);
        }
        .rowStartStyle.listItemContentDiv {
            width: 100%;
            height: 145px;
            background-color: white;
        }

        .houseImage {
            margin-left: 20px;
            width: 140px;
            height: 115px;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .rowCenterStyle.baseIconImg {
            width: 20px;
            height: 15px;
            border: 1px solid rgb(153,153,153);
            border-radius: 2px;
            margin-right: 5px;
        }
    </style>
</template>