<template>
 <div>
<div class="back">
<button @click="GoHome">Back</button>
</div>
<Tables 
@dupa="setRating" :model-value="rating"
ref="Tables"
/>  <!--//:value="selected" @input="selected=$event"-->

<div class="logo">
  <h1>FCOOLKY</h1>
</div>

<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>

<div class="navigation">
<button @click="GotoLogin">Log in</button>
<button @click="GotoPlayandCreateTable">Create new table</button>
<button >Settings</button>
<button :disabled="rating=== null"  @click="GotoPlay">Play</button>
</div>

 </div>
</template>

<script>
import Tables from './Tables.vue'

export default {

  components:{
  Tables
  },

  data(){
    return{
      selected: '',
      rating: null
    }
  },

  methods:{
      GoHome() {
     this.$router.push('/');
    },

      GotoLogin(){
     this.$router.push('/login');
    },

     GotoPlayandCreateTable(){
         this.$refs.Tables.addTable();
      //  this.$router.push('/play');
    },

      GotoPlay(){
     this.$router.push('/play');
    },
      setRating(value) {
      this.rating = value;
    },

   
  }
}
</script>


<style>

body{
  overflow: hidden;
}
.navigation{
position: absolute;
 height: 100px;
 width: 50%;
 top:70%;
 left:50%;
 font-size: 14px;
 text-align: center;
 transform: translate(-50%,60%);
  font-family: "Roboto", sans-serif;

}

.navigation button{
  height: 50px;
  width: 150px;
  margin: 0 10px;
  background: #5d171d;
  color:white;
  border: 1px solid #510768;
  border-radius: 3px;
  font-size: 15px;

}

.navigation button:hover{
 background: #aa343e;
}
</style>