<template>
    <div class="rowLeftMiddleStyle" style="height: 100%; flex: 1">
        <div class="rowLeftMiddleStyle">
            <img :onerror="errorImage" class="listItemHouseImage" :src="house.thumbUrl">
        </div>
        <div class="rowLeftMiddleStyle" style="height: 100%; flex: 1; align-items: flex-start">
            <div class="columnLeftTopStyle" style="height: 105px;margin-top: 20px; margin-left: 5px;">
                <span style="color:rgb(51,51,51); font-size: 18px;">{{house.saleSubject}}</span>
                <div class="columnLeftBottomStyle" style="width: 100%; flex: 1">
                    <span style="color:rgb(153,153,153); font-size: 12px; margin-bottom: 5px">{{subSubject}}</span>
                    <div class="rowLeftMiddleStyle" style="height: 20px; width: 100%">
                        <div class="rowCenterStyle listItembBaseIconImg">
                            <img src="../assets/image/钥匙.png">
                        </div>
                        <div class="rowCenterStyle listItembBaseIconImg">
                            <img src="../assets/image/视频.png">
                        </div>
                        <div class="rowCenterStyle listItembBaseIconImg">
                            <img src="../assets/image/VR.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rowCenterStyle" style="height: 100%; width: 100px;">
            <score-label :qualityScore="house.qualityScore"></score-label>
        </div>
    </div>
</template>

<script>
    import ScoreLabel from './ScoreLabel.vue'
    export default {
        name: "HouseDetailItemBase",
        props:{
            house:{
                type:Object,
            }
        },
        components:{
            ScoreLabel
        },
        data() {
            return {
                errorImage:'this.src="' + require('@/assets/image/global_image_placeholder_load.png') + '"'
            }
        },
        computed:{
            subSubject() {
                return this.house.buildName + " " + this.house.regionName + " " + this.house.sectionName
            },
        }
    }
</script>

<style scoped>
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