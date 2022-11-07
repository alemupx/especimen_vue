<script setup lang="ts">

defineProps<{
  props: any;
}>()

</script>

<template>

  {{props.info.next}}
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="prop in props.results">
        <div class="card">
          <img :src=prop.image class="card-img-top" :alt=prop.name>
          <div class="card-body">
            <h2 class="card-title">{{ prop.name }}</h2>
            <h3 class="card-subtitle mb-2 text-muted">{{ prop.species }}</h3>
            <h4 class="card-subtitle mb-2 text-muted">{{ prop.status }}</h4>
            <h5 class="card-subtitle mb-2 text-muted">{{ prop.gender }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ prop.location.name }}</h6>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<style scoped>
.card {
  margin: 1em
}

.row {
  display: flex;
  justify-content: center;
}
</style>
