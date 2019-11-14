<template>
  <div class="cust_div">
    <button>{{text}}</button>
    <input v-model="value">
  </div>
</template>

<script>
  export default {
    name: 'CustomButton',
    props: {
      text: {
        type: String,
        default: '按钮'
      }
    },
    data(){
      return{
        value:''
      }
    },
    created(){
      this.value=this.text
    },
  }
</script>

<style scoped>
  .cust_div{
    background-color: #42b983;
    width: 200px;
  }
</style>
