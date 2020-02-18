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
           if (this.newTodoItem !== ''){
              var obj = {completed: false, item : this.newTodoItem};
              // localstorage mdn
              // JSON.stringify => javascript를 string으로 변환
              localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
              
              // 확인하는 방법  
              // 브라우저 개발자 모드 -> application -> storage -> Local Storage 확인
             
              // input 초기화 로직 호출
              this.clearInput();

              // List update

           }
           
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
 .inputBox {position:relative; background:#fff; height:50px; line-height:50px; border-radius:5px; padding-right:3rem;}
 .inputBox input {border-style:none; font-size:0.9rem; width:100%; height:100%; text-align:center;}
 .addContainer {position:absolute; right:0; top:0; background: linear-gradient(to right, #6478FB, #8763Fb); display:block; width:3rem; border-radius:0 5px 5px 0;}
 .addBtn { color:#fff; vertical-align:middle; cursor:pointer;}
</style>