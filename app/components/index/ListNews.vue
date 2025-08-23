<template>
    <section name="list-news" class="col-span-2">
        <NewCard v-for="newItem in news" :autor="newItem.autor" :description="newItem.description" :date="newItem.date"
            :imagen="newItem.imagen" :title="newItem.title" :id="newItem.id" :documentId="newItem.documentId" />
    </section>
</template>

<script setup lang="ts">
import NewCard from '~/components/news/NewCard.vue';
import { MOCK_NEWS } from '~/mock/news-mock';
import type { NewItem } from '~/repositories/INewsRepository';

defineProps<{
    news: NewItem[]
}>()

</script>
