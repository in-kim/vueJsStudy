<template>
  <div>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
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
       addTodo : function() {
           // localstorage mdn
           // 저장하는 로직
           localStorage.setItem(this.newTodoItem, this.newTodoItem);
           // 확인하는 방법 
           // 브라우저 개발자 모드 -> application -> storage -> Local Storage 확인

           // 초기화 로직
           
           this.newTodoItem = '';
       }
   }
}
</script>

<style>

</style>