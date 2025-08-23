<template>
    <article  @click="goToNew(documentId)" class="hover:bg-gray-100 p-2 cursor-pointer">
        <header class="">
            <!-- <span class="text-sm text-gray-500">{{ autor }}</span> -->
            <h5 class="text-black font-bold">
                {{ title }}
            </h5>

        </header>
    </article>
</template>

<script setup lang="ts">
import type{ DataArticle } from '~/repositories/INewsRepository';
import { useRouter } from 'vue-router';

defineProps<DataArticle>()
const router = useRouter()

const goToNew = (id: string) => {
  router.push(`news/${id}`)
}


</script>
