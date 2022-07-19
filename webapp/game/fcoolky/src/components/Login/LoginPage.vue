<template>
<div>
  <div class="back">
  <button @click=" GoHome">Back</button>
  </div>

  <div class="logo">
  <h1>FCOOLKY</h1>
</div>

<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
<LoginPanel/>
</div>
</template>

<script>
import LoginPanel from './LoginPanel.vue'

export default {
  components: {
   LoginPanel,
  },

  methods:{
    GoHome(){
      this.$router.push('/');
    }
  }
 
  
}
</script>


<style >

</style>
