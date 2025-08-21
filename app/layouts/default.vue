<template>
    <div class="bg-white min-h-screen text-white">
        <SuperiorNav />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import SuperiorNav from '~/components/SuperiorNav.vue';

</script>