<template>
  <div class="w-full h-full flex flex-wrap">
    <div class="w-[80%] h-full">
      <ImagePanel :files="files" :labels="labels" @change-file-label="changeFileLabel" />
    </div>
    <div class="w-[20%] h-full pl-5">
      <el-table :data="files" :border="true" stripe header-align="center" style="height:100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="name" :align="`center`"></el-table-column>
        <el-table-column label="label" :align="`center`">
          <template #default="scope">
            <div v-if="scope.row.label">{{ scope.row.label.name}}</div>
          </template>
        </el-table-column>
      </el-table>
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

function changeFileLabel(file: File): void {
  const target = files.find(item => item.name === file.name);
  if (!target) return;
  target.label = file.label;
}

</script>