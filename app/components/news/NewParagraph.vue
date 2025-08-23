<template>
    <p class="text-black text-pretty">
        <!-- <new-paragraph :text="paragraph.text"></new-paragraph> -->
        {{ props.paragraph.text }}
    </p>
    <br v-if="props.paragraph.text" />
</template>

<script setup lang="ts">
import type { ChildrenArticle } from '~/repositories/INewsRepository';

const props = defineProps<{
    paragraph: ChildrenArticle
}>();
</script>

<!-- <p class="text-black" v-for="(paragraph, index) in currentNew.article" :key="index"></p> -->