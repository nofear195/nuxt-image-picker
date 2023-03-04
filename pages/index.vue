<template>
  <div class="w-full h-full flex flex-wrap">
    <div class="w-[80%] h-full">
      <ImagePanel :files="files" :labels="labels" />
    </div>
    <div class="w-[20%] h-full pl-5">
      <img src="~/assets/images/dog01.jpg" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { File, Label, getRandomHEXCodeColor } from '~~/utils/picker.services';

const files: File[] = reactive([]);
const labels: Label[] = reactive([]);

onMounted(() => {
  const labelNames = ["label01", "label02", "label03"];

  labelNames.forEach((name) => {
    labels.push({ name, color: getRandomHEXCodeColor() })
  })
  const fileNames = ["dog01", "dog02", "dog03", "dog04", "dog05"]

  fileNames.forEach((name) => {
    const src = `_nuxt/assets/images/${name}.jpg`
    files.push({ name: `${name}01`, src })
  })
  fileNames.forEach((name) => {
    const src = `_nuxt/assets/images/${name}.jpg`
    files.push({ name: `${name}02`, src })
  })
  fileNames.forEach((name) => {
    const src = `_nuxt/assets/images/${name}.jpg`
    files.push({ name: `${name}03`, src })
  })

})




</script>