<script setup lang="ts">
import Component from '@/components/Component.vue';
import Navbar from '@/components/Navbar.vue';

const res = await fetch(`https://rickandmortyapi.com/api/character`)
const posts = await res.json()

</script>

<template>
  <main>

    <Navbar></Navbar>

    <Component :props="posts" />

  </main>
</template>
