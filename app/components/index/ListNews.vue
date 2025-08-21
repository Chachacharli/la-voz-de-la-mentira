<template>
    <section name="list-news" class="col-span-2">
        <NewCard v-for="newItem in MOCK_NEWS" :autor="newItem.autor" :description="newItem.description"
            :date="newItem.date" :imagen="newItem.imagen" :title="newItem.title" :id="newItem.id" />
    </section>
</template>

<script setup lang="ts">

import NewCard from '~/components/news/NewCard.vue';
import { MOCK_NEWS } from '~/mock/news-mock';


</script>
