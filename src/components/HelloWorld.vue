<template>

<h1 class="title1">  {{word}}</h1>
  <button>
    <router-link to="/contact"> 聯絡我們  </router-link>
  </button>
<button v-on:click="add(5)">add</button>
  {{value}}
    <ul>
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const value=ref(0)
const word=ref("hello world")
const items = ref(['蘋果', '香蕉', '橘子'])
const add=(num)=>{
  value.value+=num
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1{
  color:red;
  font-size:30px;
}

</style>
