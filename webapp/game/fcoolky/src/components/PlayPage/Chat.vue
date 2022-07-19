
<template>
<div>
<main>
  <div class="chatPanel" :class="{avtive: showChat, 'hiddenChat' : hiddenChat}">
    
    

    <div class="chats">
      <button @click="ShowChat">CHAT</button>
      <button>CHCE RYSOWAC</button>
    </div>

    <div class="gameUsers">
    
     <div 
      v-for="user in usersList"
      v-bind:key="user.id">
      <input type="radio" >

      
      <label> {{user.title}}{{user.id+1}}</label>
      <li v-for="newUser in modelValue" v-bind:key="newUser">
        <input type="radio">{{newUser}}
      </li>
      
      </div>
    </div>

    


     <div class="buttonsPanel">
      <!--<button @click="openNewUsers">Zaproś</button> -->
      <button @click="openNewUsers">zaproś</button>
      <button>Wypros</button>
      </div>
 
    
    <ul class="asideList">
      <div class="messagePanel">
        
          <div 
          v-for="message in messages"
          v-bind:key="message.id">
         {{this.userName }} {{message.title}}
          </div>
        
       </div>

     <div class="inputPanel">
       <form v-on:submit.prevent="addNewText">
      <input v-model="newText" placeholder="add text" >
       <button @click="dispalyMessage">Send</button>
       </form>
      </div> 
    </ul>
    
  </div>

  

</main>
</div>
</template>


<script>
export default{

    props: ['callMethod', 'modelValue'],
 name: "Modal",
  data(){
    return{
    showChat: true,
    hiddenChat: false,
    newText:"",
    userName: 'User1:  ',
    index:1,
    modalShow: false,
show: false,
    usersList:[
      {
        id:0,
        title:'user'
       
      }
    ],


    messages:[
      {
        id:1,
        title:' Hello to All users !',
       
      }
    ]
    }
   
  },




methods:{
  ShowChat(){
    this.showChat = !this.showChat
    this.hiddenChat = !this.hiddenChat
   
  },

  dispalyMessage: function(){
   this.messages.push({
     title:this.newText
   })
  this.newText = "";
  },

  addUser: function(){
   this.tableslist.push({
     id:this.index,
     title: "user"
   })
   this.index++

  },

  openNewUsers(){
    
  //this.$refs['user-modal'].show()
   this.callMethod()
  },

  

}

}
</script>

<style>
.chatPanel {
  background-color:rgba(60, 91, 117, 0.4);
  position: fixed;
  top: 0%;
  left: 86%;
  width: 14%;
  height: 100%;
  z-index: 1;
}

.hiddenChat{
  position: fixed;
  top: 95%;
  bottom: 0;
  left: 85%;
  width: 15%;
  height: 90%;
  z-index: 1;
}



.asideList {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 60%;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, .7);
  height: 50px;
}


.inputPanel{
  position: absolute;
  height: 30px;
  width: 100%;
  top:97%;
  background: blueviolet;
}
.inputPanel input{
   position: absolute;
   left:0;
  height: 100%;
  width: 100%;
}
.inputPanel button{
 position: absolute;
 right:0;
 height: 100%;
}

.chats button{
height: 50px;
width: 50%;
top:0;
left:0%;
background: rgb(75, 187, 240);
color: white;
font-size: 15px;
}

.chats button:hover{
	background: rgb(0, 124, 124);
	
}


.chats{
 display: flex;
}


.asideList{
  color:white;
}


.buttonsPanel{
 position: absolute;
  height: 40px;
  width: 100%;
  top:20%;
  
}

.buttonsPanel button{
    height: 100%;
    width: 50%;
}

.gameUsers{
  color:white;
  list-style:none

}

.gameUsers button{
  width: 25%;

  
}

</style>