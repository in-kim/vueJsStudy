<template>
  <div>
      <transition-group name="list" tag="ul">
        <!-- v-bind:key를 사용해주면 v-for 기능을 가속화 한다. -->
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods : {
    removeTodo(todoItem, index){
      this.$emit('removeItem',todoItem, index);
    },
    toggleComplete(todoItem, index) {
      this.$emit('toggleItem',todoItem, index);
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
  

  /* 리스트 아이템 트렌지션 효과  */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>