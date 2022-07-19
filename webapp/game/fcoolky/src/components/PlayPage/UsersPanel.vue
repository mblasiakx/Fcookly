<template>
<div class="usersPanel" :class="{avtive: showUsers, 'hiddenUsers' : hiddenUsers}">
    <div class="users">
      <button @click="ShowUsers">OPTIONS</button>   
    </div>
   
    
  </div>
</template>

<script>
export default{

  data(){
    return{
    showUsers: true,
    hiddenUsers: false
    }
   
  },
methods:{
  ShowUsers(){
    this.showUsers = !this.showUsers
    this.hiddenUsers = !this.hiddenUsers
  }
}

}
</script>

<style >

.usersPanel{
  background-color:rgba(60, 91, 117, 0.4);
  position: fixed;
  top: 60%;
  right: 85%;
  width: 15%;
  height: 50%;
  z-index: 1;
}

.hiddenUsers{
  background-color:rgba(60, 91, 117, 0.4);
   position: fixed;
  top: 60%;
  right: 100%;
  width: 15%;
  height: 50%;
  z-index: 1;
}



.users{
  display: flex;
}

.users button{
height: 50px;
width: 33%;
position: absolute;
top:0;
left:100%;
background: rgb(75, 187, 240);
color: white;
font-size: 15px;
}
</style>
