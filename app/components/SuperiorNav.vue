<template>
    <nav class="bg-white shadow px-4 py-3 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
            <Medium></Medium>
        </div>

        <div class="flex-1 mx-4">
            <input type="text" placeholder="Buscar"
                class="max-w-52 px-4 text-md py-1 border-0 focus:ring ring-slate-800/30 rounded-md focus:outline-none bg-gray-100 placeholder:text-gray-500 text-gray-800">
        </div>
    </nav>
</template>

<script setup lang="ts">
import Medium from '~/assets/svg/Medium.vue';

</script>
