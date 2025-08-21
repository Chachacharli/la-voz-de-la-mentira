<template>
    <main name="main-content" class="m-auto mt-7 grid grid-cols-3 max-w-5xl gap-x-3 relative">
        <list-news></list-news>
        <side-list></side-list>
    </main>
</template>


<script setup lang="ts">
import ListNews from '~/components/index/ListNews.vue';
import SideList from '~/components/index/SideList.vue';

</script>