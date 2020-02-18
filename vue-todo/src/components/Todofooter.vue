<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo()">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo : function() {
      // clear api 사용
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width:8.5rem; height:58px; line-height:58px;
    background-color: #fff; border-radius:5px;
    margin:0 auto;
  }
  .clearAllBtn {
    display:block; color: #e20303; cursor:pointer;
  }
</style> 