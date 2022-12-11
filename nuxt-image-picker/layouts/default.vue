<template>
    <div class="w-screen h-screen bg-red-100 box-border grid grid-rows-[repeat(25,_minmax(0,_1fr))]">
        <div class="row-[1/3] border-b-2 border-red-300"></div>
        <div class="row-[3/-1] my-10 mx-10">
        <slot />
        </div>
    </div>
</template>