<template>
    <div class="w-[100%] h-[100%] flex flex-wrap">
        <div class="w-1/6 pr-5"><ToolBox/></div>
        <div class="w-4/6"><ImagePanel/></div>
        <div class="w-1/6 pl-5"><ImageTable/></div>
    </div>
</template>
<script setup lang="ts">

const links: string[] = reactive(['about', 'image-picker'])
</script>