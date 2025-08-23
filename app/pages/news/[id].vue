<template>
    <main name="main-content" class="m-auto mt-7 max-w-3xl relative">
        <section class="my-2">
            <button
                class="bg-slate-400 px-3 py-1 rounded cursor-pointer hover:bg-slate-600 transition-all duration-100">
                Regresar
            </button>
        </section>
        <article class="cols-span-3">
            <header class="flex flex-col gap-3">
                <h1 class="text-3xl font-bold text-black">{{ currentNew.title }}</h1>
                <section class="text-gray-500 flex gap-5" name="metadata-new">
                    <span class="text-gray-800">{{ currentNew.autor }}</span>
                    <span>{{ currentNew.date }}</span>
                </section>
            </header>
            <hr class="border border-gray-100 my-5">
            <div v-if="currentNew.imagen" name="main-image-article">
                <img class="w-full" :src="currentNew.imagen" alt="">
            </div>
            <div name="main-content-article" class="my-5">
                <p class="text-black">
                    {{ currentNew.description }}
                </p>
            </div>
            <footer>

            </footer>
        </article>
    </main>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { NewItem } from '~/repositories/INewsRepository'
import { getNew } from '~/services/newsService'


const route = useRoute()
const newsId = route.params.id

const currentNew = ref<NewItem>({
    id: '',
    title: '',
    autor: '',
    date: '',
    description: '',
    imagen: '',
    documentId: ''  
})

onMounted(() => {
    debugger
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