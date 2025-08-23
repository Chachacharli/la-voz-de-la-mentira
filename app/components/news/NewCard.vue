<template>
    <article @click="goToNew(documentId)" class="grid grid-cols-12 cursor-pointer rounded-lg p-4 bg-white gap-x-3 hover:bg-gray-50">
        <section class="col-span-12" name="author-info">
            <div class="flex justify-between">
                <span class="text-sm text-gray-500">{{ autor }}</span>
            </div>
        </section>
        <header class="col-span-8">
            <h3 class="text-black font-bold text-2xl">
                {{ title }}
            </h3>
            <p class="text-gray-600 mt-2">
                {{ description }}
            </p>
        </header>
        <div role="banner" class="col-span-4">
            <img v-if="imagen" :src="imagen" class="mb-3 rounded w-full h-48 object-cover" />
        </div>
        <footer class="col-span-12">
            <div class="flex justify-between">
                <span class="text-sm text-gray-500">{{ formatDate(date) }}</span>
            </div>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { formatDate } from '~/utils/formatDate';

import type { NewItem } from '~/repositories/INewsRepository';

const props = defineProps<NewItem>()
const router = useRouter()

const goToNew = (id: string) => {
    router.push(`/news/${id}`)
}

</script>
