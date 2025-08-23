<template>
    <section name="list-news" class="col-span-2">
        <NewCard v-for="newItem in news" v-bind="newItem" />
    </section>
</template>

<script setup lang="ts">
import NewCard from '~/components/news/NewCard.vue';
import { MOCK_NEWS } from '~/mock/news-mock';
import type { DataArticle } from '~/repositories/INewsRepository';

defineProps<{
    news: DataArticle[]
}>()

</script>
