<template>
    <article  @click="goToNew(id)" class="hover:bg-gray-100 p-2 cursor-pointer">
        <header class="">
            <span class="text-sm text-gray-500">{{ autor }}</span>
            <h5 class="text-black font-bold">
                {{ title }}
            </h5>

        </header>
    </article>
</template>

<script setup lang="ts">
import type{ NewItem } from '~/repositories/INewsRepository';
import { useRouter } from 'vue-router';

defineProps<NewItem>()
const router = useRouter()

const goToNew = (id: string) => {
  router.push(`news/${id}`)
}


</script>
