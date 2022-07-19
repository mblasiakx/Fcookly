<template>
<div>
<div class="back">
<button @click="GoBack">Back</button>
</div>

<div class="drawOptions">
  <button @click="ShowPanel">X</button>
  <button @click="GoHome">Undo</button>
  <button @click="GoHome">Redo</button>
</div>


<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
<Chat :callMethod="ShowPanel" :model-value="AllNewUsers"/>
<UsersPanel/>
<UsersList @toParent="GetNewUsers" ref='UsersList'/>
</div>
</template>


<script>
import Chat from './Chat.vue'
import UsersPanel from './UsersPanel.vue'
import UsersList from './UsersList.vue'

export default{
  components:{
  Chat,
  UsersPanel,
  UsersList,
  },

  data(){
    return{
      NewUsersArray:[],
      AllNewUsers:[],
    }
  },

methods:{
    GoBack(){
          this.$router.push('/menu');
    },

    ShowPanel(){
        this.$refs.UsersList.AddNewUsersAndHide();
    },

    GetNewUsers(NewUsersArray){
      
      //console.log('emit dane moje to:', value)
      //this.NewUsersArray.concat(value)
      console.log('emit dane moje to:', NewUsersArray)
     // this.NewUsersArray.push(value)
     this.AllNewUsers = this.AllNewUsers.concat(NewUsersArray)
      console.log('emit dane moje to:', this.AllNewUsers)
      

    }
}
}

</script>

<style>

.drawOptions{
position:absolute;
top:15%;
}


.drawOptions button{
  display:block;
  height: 50px;
  width: 80px;;
  background: tomato;
  color: white;
  font-size: 15px;
  margin : 10px 0;
  position: relative;
}
.drawOptions button:nth-child(1){
   background: rgb(5, 56, 48);
}
.drawOptions button:nth-child(2){
   background: rgb(130, 9, 141);
}
.drawOptions button:nth-child(3){
   background: rgb(110, 10, 6);
}


.drawOptions button:hover{
	background: rgb(221, 179, 171)
	
}
</style>