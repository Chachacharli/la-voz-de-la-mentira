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
import type { NewItem } from '~/repositories/INewsRepository';

const news = ref<NewItem[]>([]);

type TypeArticle = 'paragraph' | 'image' | 'video';
type TypeChildrenArticle = 'text' | 'list' | 'quote';


export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

type ChildrenArticle = {
    type: TypeChildrenArticle;
    text: string;
}

type ArticleContent = {
    type: TypeArticle;
    children: ChildrenArticle[];
}

type DataArticle = {
    createdAt: string;
    description: string;
    documentId: string
    id: number
    publishedAt: string
    slug: string
    title: string;
    updatedAt: string;
    article: ArticleContent;
    cover: StrapiImage
}

interface StrapiNewsFormat {
    data: DataArticle[];
    meta: {
        pagination: {
            total: number;
            page: number;
            pageSize: number;
            pageCount: number;
        }
    }
}

const formatNews = (articles: StrapiNewsFormat): NewItem[] => {
    debugger
    if (articles === undefined) return [];
    return articles.data.map(article => ({
        id: article.id,
        title: article.title,
        description: article.description,
        autor: 'Autor Desconocido',
        date: article.publishedAt,
        imagen: 'http://localhost:1337' + article.cover?.url,
        documentId: article.documentId
    }));
};

onMounted(async () => {
    try {
        const articles = await getNews();
        debugger
        news.value = formatNews(articles)
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
});

</script>