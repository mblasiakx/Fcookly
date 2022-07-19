<template>
<div>
  <div class="asider" :class="{avtive: show, 'hiddenTables' : hidden}">
    <div class="tables">
      <button @click="ShowTables">TABLES</button>
   </div>

   <div class="tablesList">
       
    
          <div 
          v-for="table in tableslist"
          v-bind:key="table.id">
        <input type="radio" @click="activate(id)"  >
        <label> {{table.title}}{{table.id+1}}</label>
          </div>
          
      
   </div>
  </div>


</div>
</template>
<script>
export default{

 props: ['modelValue'],

  data(){
    return{
    show: false,
    hidden: true,
    index:1,
    tableslist:[
      {
        id:0,
        title:'table'
       
      }
    ]
   
    }
   
  },
methods:{
  ShowTables(){
    this.show = !this.show
    this.hidden = !this.hidden
  },

 activate(option) {
      this.$emit('dupa', option);
      console.log("xxx")
    },

      addTable: function(){
   this.tableslist.push({
     id:this.index,
     title: "table"
   })
   this.index++

  }

   
}

}
</script>


<style>
main {
  height: 100%;
  width: 50%;
}

.asider {
  background-color:rgba(60, 91, 117, 0.4);
  position: fixed;
  top: 10%;
  bottom: 0;
  left: 0;
  width: 20%;
  height: 90%;
  z-index: 1;
}

.hiddenTables{
  position: fixed;
  top: 10%;
  bottom: 0;
  left: -20%;
  width: 20%;
  height: 90%;
  z-index: 1;
}



.tablesList{
  height: 100%;
  width: 100%;
color: white;
 
}

.tablesList input{
margin: 2%;

}

.asideAnchor {
  border-bottom: 2px solid rgba(255, 255, 255, .7);
  padding: 20px 0;
  display: block;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  transition: color .3s .15s ease-in;
}


.tables button{
height: 50px;
width: 80px;
position: absolute;
top:0;
left:100%;
background: rgb(75, 187, 240);
color: white;
font-size: 15px;
}

.tables button:hover{
	background: rgb(0, 124, 124);
	
}
</style>

