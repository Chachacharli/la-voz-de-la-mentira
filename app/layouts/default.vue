<template>
  <div class="flex flex-col min-h-screen bg-white text-white">
    <!-- Header -->
    <SuperiorNav />

    <!-- Contenido principal -->
    <main class="flex-1">
      <slot></slot>
    </main>

    <!-- Footer fijo al fondo -->
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import SuperiorNav from '~/components/SuperiorNav.vue';
import BaseFooter from '~/components/BaseFooter.vue';
</script>
