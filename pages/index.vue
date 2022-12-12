<template>
  <div>
    <div class="text-lg">
      <NuxtLink to="./">Welcome to the homepage</NuxtLink>
    </div>
    <template v-for="link in links">
      <div>
        <NuxtLink :to="`./${link}`">to {{link}}</NuxtLink>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">

const links: string[] = reactive(['about', 'image-picker'])
</script>