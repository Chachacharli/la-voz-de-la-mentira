<template>
    <main name="main-content" class="m-auto mt-7 max-w-3xl relative">
        <section class="my-2 p-5 md:p-0">
            <button @click="$router.back()"
                class="bg-slate-400 px-3 py-1 rounded cursor-pointer hover:bg-slate-600 transition-all duration-100">
                Regresar
            </button>
        </section>
        <article class="cols-span-3">
            <header class="flex flex-col gap-3 p-5 md:p-0">
                <h1 class="text-3xl font-bold text-black">{{ currentNew.title }}</h1>
                <section class="text-gray-500 flex gap-5" name="metadata-new">
                    <!-- <span class="text-gray-800">{{ currentNew. }}</span> -->
                    <span>{{ formatDate(currentNew.publishedAt) }}</span>
                </section>
            </header>
            <hr class="border border-gray-100 my-5 p-5 md:p-0">
            <div v-if="currentNew.cover?.url" name="main-image-article">
                <img loading="eager" class="w-full" :src="addBasePath(currentNew.cover.url)"
                    :alt="currentNew.cover?.alternativeText">
            </div>
            <div name="main-content-article" class="my-5 p-5 md:p-0">
                <p class="text-black">
                    {{ currentNew.description }}
                </p>
                <hr class="border border-gray-100 my-5">
                <template v-for="(paragraph, index) in currentNew.article">
                    <NewParagraph v-if="paragraph.children[0]?.type === 'text'" class="text-black" :key="index"
                        :paragraph="paragraph.children[0]" />
                </template>
            </div>
            <footer>

            </footer>
        </article>
    </main>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { DataArticle } from '~/repositories/INewsRepository'
import { getNew } from '~/services/newsService'
import { addBasePath } from '#imports'
import { formatDate } from '#imports'
import NewParagraph from '~/components/news/NewParagraph.vue'

const route = useRoute()
const newsId = route.params.id

const currentNew = ref<DataArticle>({
    id: 0,
    createdAt: '',
    description: '',
    documentId: '',
    publishedAt: '',
    slug: '',
    title: '',
    updatedAt: '',
    article: [],
})

onMounted(() => {
    if (newsId) {
        getNew(newsId as string)
            .then(data => {
                currentNew.value = data;
            })
            .catch(error => {
                console.error("Error fetching news:", error);
            });
    }
})

</script>