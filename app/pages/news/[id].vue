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
                <h1 class="text-3xl font-bold text-black">{{ currencyNew.title }}</h1>
                <section class="text-gray-500 flex gap-5" name="metadata-new">
                    <span class="text-gray-800">{{ currencyNew.autor }}</span>
                    <span>{{ currencyNew.date }}</span>
                </section>
            </header>
            <hr class="border border-gray-100 my-5">
            <div v-if="currencyNew.imagen" name="main-image-article">
                <img class="w-full" :src="currencyNew.imagen" alt="">
            </div>
            <div name="main-content-article" class="my-5">
                <p class="text-black">
                    {{ currencyNew.description }}
                </p>
            </div>
            <footer>

            </footer>
        </article>
    </main>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router'
import { MOCK_NEWS } from '~/mock/news-mock'
import type { NewItem } from '~/repositories/INewsRepository'

const route = useRoute()
const newsId = route.params.id

const currencyNew: NewItem = MOCK_NEWS.find(item => item.id == newsId) as NewItem

</script>