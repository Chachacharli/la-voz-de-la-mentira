<template>
    <main name="main-content" class="m-auto mt-7 grid grid-cols-3 max-w-6xl gap-x-3 relative">
        <tag-list></tag-list>
        <list-news :news="news"></list-news>
        <side-list></side-list>
    </main>
</template>


<script setup lang="ts">
import ListNews from '~/components/index/ListNews.vue';
import SideList from '~/components/index/SideList.vue';
import TagList from '~/components/index/TagList.vue';
import { getNews } from '~/services/newsService';
import { ref, onMounted } from 'vue';
import type { DataArticle, StrapiNew } from '~/repositories/INewsRepository';

const news = ref<DataArticle[]>([]);

const formatNews = (articles: StrapiNew): DataArticle[] => {
    if (articles === undefined) return [];
    return articles.data.map(article => ({
        ...article
    }));
};

onMounted(async () => {
    try {
        const articles = await getNews();
        news.value = formatNews(articles)
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
});

</script>