<template>
  <Panel />  
</template>

<script>
import Panel from './components/Panel/Panel.vue';

//import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css"


export default {
  components: {
    Panel,
  },
  data(){
    return{

    }
  }
}
</script>

<style>

*{
  margin:0;
  padding:0;
}

body {
	background: linear-gradient(-45deg, #14032f, #000000, #0a242e, #03172f);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.back button{
height: 50px;
width: 80px;;
background: tomato;
color: white;
font-size: 15px;
}

.back button:hover{
	background: purple;
	
}


</style>
