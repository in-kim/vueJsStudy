// 
<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포넌트의 메서드 명" -->
    <TodoInput v-on:addTodoItem ="addOneItem"></TodoInput>
    <!-- v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성" -->
    <TodoList v-bind:propsdata = "todoItems" 
        v-on:removeItem ="removeOneItem" 
        v-on:toggleItem ="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:clearAll ="clearAllTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/Todoinput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/Todofooter.vue'


export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    // add 버튼 동작 ( TodoInput )
    addOneItem(todoItem){
       const obj = {completed: false, item : todoItem};
       // localstorage mdn
       // JSON.stringify => javascript를 string으로 변환
       localStorage.setItem(todoItem, JSON.stringify(obj));

       this.todoItems.push(obj);
      
       // 확인하는 방법  
       // 브라우저 개발자 모드 -> application -> storage -> Local Storage 확인
    },
    // trash 버튼 동작 ( TodoList )
    removeOneItem(todoItem, index){
      // localStorage에 남아있는 데이터 지움.
      localStorage.removeItem(todoItem.item);
      // 뿌려준 리스트에 있는 데이터를 지움.
      this.todoItems.splice(index, 1);
    },
    // 처리한 일 동작 ( TodoList )
    toggleOneItem(todoItem, index){
      // 설정값 변환 (app data 직접 설정)
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // localStorage item 초기화 , localStorage 갱신
      localStorage.removeItem(todoItem.item);
      // localStorage item 추가 , localStorage 갱신
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    // clearAll 버튼 동작 ( TodoFooter )
    clearAllTodo() {
      localStorage.clear();
      // 뿌려준 리스트에 있는 데이터를 지움.
      this.todoItems = [];
    }
  },
  created() {
    if(localStorage.length > 0){
      for (let i = 0; i < localStorage.length; i ++){
        // webpack-dev-server key가 배열에 저장되는 현상 방지
        if ( localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // JSON.parse => string => javascrip object로 변경
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components : {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter,
  }
}
</script>

<style>
  body {text-align:center; background-color:#F6F6F6}
  input {border-style : groove; width:200px;}
  button { border-style: groove;}
  .shadow {box-shadow : 5px 10px 10px rgba(0,0,0,0.03);}
  #app {width:400px; margin:0 auto;}
</style> 