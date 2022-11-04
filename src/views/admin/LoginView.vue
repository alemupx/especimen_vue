<script setup lang="ts">
import Component from '@/components/Component.vue';



var data = {object:{name:'perry', age:'73'},object2:{name:'Joe', age:'73'}};

</script>

<template>
  <main>
    
    <Component :props="data"/>
    
  </main>
</template>
