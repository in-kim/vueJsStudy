<template>
  <div>
      <ul>
        <!-- v-bind:key를 사용해주면 v-for 기능을 가속화 한다. -->
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  // 데이터 저장할 배열 생성
  data : function(){
    return {
      todoItems : []
    }  
  },
  methods : {
    removeTodo: function(todoItem, index){
      // localStorage에 남아있는 데이터 지움.
      localStorage.removeItem(todoItem);
      // 뿌려준 리스트에 있는 데이터를 지움.
      this.todoItems.splice(index, 1);

    },
    toggleComplete : function(todoItem, index) {
      // 설정값 변환
      todoItem.completed = !todoItem.completed;
      // localStorage item 초기화 , localStorage 갱신
      localStorage.removeItem(todoItem.item);
      // localStorage item 추가 , localStorage 갱신
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  // localStorage에 저장된 key를 todoItems 배열에 담는 함수
  created: function() {
    if(localStorage.length > 0){
      for (var i = 0; i < localStorage.length; i ++){
        // webpack-dev-server key가 배열에 저장되는 현상 방지
        if ( localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // JSON.parse => string => javascrip object로 변경
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // localStorage에 데이터를 key와 value를 동일하게 넣었을때
          // 1. localStorage.getItem(localStorage.key(i));
          // 2. this.todoItems.push(localStorage.item(i));
        }
      }
    }
  },
}
</script>

<style scope>
  ul {list-style-type:none; padding-left:0; margin-top:0; text-align:left;}
  li {display:flex; height:50px; line-height:50px; margin:0.5rem 0; padding:0 0.9rem; background:#fff; border-radius:5px;}
  .removeBtn {margin-left: auto; color:#de4343; cursor:pointer;}
  .checkBtn {line-height:45px; color:#62acde; margin-right:5px; cursor:pointer;}
  .checkBtnCompleted {color:#b3adad;}
  .textCompleted {color:#b3adad; text-decoration: line-through;}
  
</style>