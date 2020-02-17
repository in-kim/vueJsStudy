<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer">
          <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
      </span>
  </div>
</template>

<script>
export default {
   data : function() {
       return {
           newTodoItem : ""
       }
   },
   methods: {
       // 저장하는 로직
       addTodo : function() {
           // localstorage mdn
           localStorage.setItem(this.newTodoItem, this.newTodoItem);
           // 확인하는 방법 
           // 브라우저 개발자 모드 -> application -> storage -> Local Storage 확인

           // input 초기화 로직 호출
           this.clearInput();
       },
       // 초기화 로직
       clearInput : function(){
           this.newTodoItem = '';
       }
   }
}
</script>

<style scrope>
 input:focus {outline:none;}
 .inputBox {background:#fff; height:50px; line-height:50px; border-radius:5px;}
 .inputBox input {border-style:none; font-size:0.9rem;}
 .addContainer {float:right; background: linear-gradient(to right, #6478FB, #8763Fb); display:block; width:3rem; border-radius:0 5px 5px 0;}
 .addBtn { color:#fff; vertical-align:middle; cursor:pointer;}
</style>