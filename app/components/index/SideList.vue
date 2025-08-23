<template>
    <aside name="side-list" class="col-span-1 px-2 sticky top-4 self-start h-fit border border-l border-l-gray-200 ">
        <header class="p-2">
            <h4 class="text-gray-800 text-md font-bold">
                Hot Now
            </h4>
        </header>
        <section role="list" class="flex flex-col gap-5 ">
            <!-- <HotNewCard
                v-for="item in HOT_NOW"
                :id="item.id"
                :description="item.description"
                :date="item.date"
                :autor="item.autor"
                :title="item.title"
                :documentId="item.documentId"
                :createdAt="item.createdAt"
                :publishedAt="item.publishedAt"
                :slug="item.slug"
                :updatedAt="item.updatedAt"
                :article="item.article"
                :cover="item.cover"
            /> -->
        </section>
    </aside>
</template>

<script setup lang="ts">
import HotNewCard from '../news/HotNewCard.vue';
import { HOT_NOW } from '~/mock/news-mock';


</script>