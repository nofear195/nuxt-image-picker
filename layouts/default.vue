<template>
    <div class="w-screen h-screen bg-red-100 box-border ">
        <div class="h-[8%] border-b-2 border-red-300 flex p-5">
            <template v-for="link in links">
                <div class="mx-3 border-solid border-b-2 border-red-400 text-xl">
                    <NuxtLink :to="`./${link}`"> To {{ link === ''? 'home': link }}</NuxtLink> 
                </div>
            </template>
        </div>
        <div class="h-[92%] p-5">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">

const links: string[] = reactive(['', 'about', 'image-picker'])
</script>