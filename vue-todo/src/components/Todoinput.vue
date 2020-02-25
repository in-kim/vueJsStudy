<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer">
          <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
      </span>

      <Modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">
            경고
            <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">
            검색어를 입력하세요.
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
   data() {
       return {
           newTodoItem : "",
           showModal: false
       }
   },
   methods: {
       // 저장하는 로직
       addTodo() {
           if (this.newTodoItem !== ''){
            //  this.$emit('이벤트이름', 인자1,)
            this.$emit('addTodoItem',this.newTodoItem);
             
            // input 초기화 로직 호출
            this.clearInput();
           }
           else {
               this.showModal = !this.showModal
           }
       },
       // 초기화 로직
       clearInput(){
           this.newTodoItem = '';
       }
   },
   components: {
        Modal
    }
}
</script>

<style scrope>
 input:focus {outline:none;}
 .inputBox {position:relative; background:#fff; height:50px; line-height:50px; border-radius:5px; padding-right:3rem;}
 .inputBox input {border-style:none; font-size:0.9rem; width:100%; height:100%; text-align:center;}
 .addContainer {position:absolute; right:0; top:0; background: linear-gradient(to right, #6478FB, #8763Fb); display:block; width:3rem; border-radius:0 5px 5px 0;}
 .addBtn { color:#fff; vertical-align:middle; cursor:pointer;}
 .closeModalBtn {color:#42b983; float:right; cursor:pointer}
</style>