<template>
<div class="NewUsersPanel" :class="{avtive: showNewUsers, 'hiddenNewUsers' : hiddenNewUsers}">
    
    <div class="usersList" >
    <div>
        <input type="checkbox" v-model="NewUser.name" value="user1" >
        <label>user1</label>
    </div>
    <div>
        <input type="checkbox" v-model="NewUser.name" value="user2">
        <label>user2</label>
    </div>
    <div>
        <input type="checkbox" v-model="NewUser.name" value="user3">
        <label>user3</label>
    </div>


</div>


     <button @click="selectAddOn" >hide</button>
  
</div>
</template>

<script>
export default{

  data(){
    return{
    showNewUsers: false,
    hiddenNewUsers: true,
    //selected:[],
    NewUser:{
      name:[],
      id:1
    }
    }
    
   
  },

  

methods:{
  AddNewUsersAndHide(){
    this.showNewUsers = !this.showNewUsers
    this.hiddenNewUsers = !this.hiddenNewUsers
  }, 
    
    
    selectAddOn() {
      this.$emit('toParent', this.NewUser.name)
    }


}

}
</script>

<style>


.NewUsersPanel{
  background-color:rgba(92, 138, 175, 0.4);
  position: fixed;
  top: 20%;
  right: 50%;
  width: 15%;
  height: 40%;
  z-index: 1;
}

.hiddenNewUsers{
  background-color:rgba(60, 91, 117, 0.4);
  position: fixed;
  top: 20%;
  right: 150%;
  width: 15%;
  height: 50%;
  z-index: 1;
}



.usersList{
  display: flex;
}

.usersList button{
height: 50px;
width: 33%;
position: absolute;
top:100%;
left:25%;
background: rgb(75, 187, 240);
color: white;
font-size: 15px;
}
</style>