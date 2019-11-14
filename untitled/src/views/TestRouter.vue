<template>
  <div class="cust_div">
    <custom-button v-bind:text="text" ref="button"></custom-button>
  </div>
</template>

<script>
  import CustomButton from '../components/CustomButton'
  export default {
    name: 'TestRouter',
    components:{
      CustomButton
    },
    data(){
      return{
        text:'sddd'
      }
    },
    created () {
      // alert(this.$route.params.title)
      // alert(this.$route.query.title)
    },
    mounted () {
      this.$nextTick(()=>{
        console.dir(this.$refs.button)
      })
    }
  }
</script>

<style scoped>

</style>
