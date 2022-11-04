<script setup lang="ts">
defineProps<{
  props:{};
}>()
</script>

<template>
 <!--  <div>    
    {{props}}
    <div v-for="prop in props">
      {{prop}}
      <div v-for="propi in prop">
        {{propi}}
      </div>
    </div>
  </div> -->

  <div class="card" style="width: 18rem;">
    <div  class="card-body" v-for="prop in props">
      {{props}}
      <div v-for="propi in prop">
        <h5 class="card-title">
          {{prop}}{{propi}} 
        </h5>
        
      </div>
      
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<style scoped>

</style>
