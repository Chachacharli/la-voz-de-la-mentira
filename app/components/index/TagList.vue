<template>
    <section class="relative col-span-3">
        <!-- Contenedor scrollable -->
        <div ref="scrollRef"
            class="flex gap-x-3 px-6 overflow-x-auto overflow-y-hidden py-3 scrollbar-hide scroll-smooth">
            <span @click="selectTag($event)" v-for="tag in TAGS" :key="tag.id" :data-id="tag.id"
                data-selected="false"
                class="bg-gray-200 hover:bg-gray-300 cursor-pointer text-nowrap text-black px-4 py-1 rounded-2xl transition-colors data-[selected='true']:bg-gray-900 data-[selected='true']:text-white">
                {{ tag.name }}
            </span>
        </div>

        <!-- Fade izquierda -->
        <div class="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent">
        </div>
        <!-- Fade derecha -->
        <div class="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent">
        </div>

        <!-- Flecha izquierda -->
        <button @click="scrollLeft" aria-label="Scroll left"
            class="absolute left-0  text-black cursor-pointer top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 bg-white/80 hover:bg-gray-100/80 rounded-full shadow">
            <ChevronLeft></ChevronLeft>
        </button>

        <!-- Flecha derecha -->
        <button @click="scrollRight" aria-label="Scroll right"
            class="absolute right-0 text-black cursor-pointer top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7 bg-white/80 hover:bg-gray-100/80 rounded-full shadow">
            <ChevronRigth></ChevronRigth>
        </button>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChevronLeft from "~/assets/svg/ChevronLeft.vue";
import ChevronRigth from "~/assets/svg/ChevronRigth.vue";

interface Tag {
    id: number;
    name: string;
}

const TAGS: Tag[] = [
    { id: 1, name: "Food" },
    { id: 3, name: "Home" },
    { id: 4, name: "Spices" },
    { id: 5, name: "Tools" },
    { id: 6, name: "Kitchen" },
    { id: 7, name: "Garden" },
    { id: 8, name: "Home Security" },
    { id: 9, name: "Footwear" },
    { id: 10, name: "Clothing - Accessories" },
    { id: 11, name: "Food - Vegetables" },
    { id: 12, name: "Electronics" },
    { id: 13, name: "Accessories" },
    { id: 14, name: "Clothing - Bottoms" },
    { id: 15, name: "Food - Condiments" },
];

const scrollRef = ref<HTMLElement | null>(null);

const currentFilters: Ref<Tag[]> = ref([])

const scrollLeft = () => {
    scrollRef.value?.scrollBy({ left: -200, behavior: "smooth" });
};

const scrollRight = () => {
    scrollRef.value?.scrollBy({ left: 200, behavior: "smooth" });
};

const selectTag = (event: Event) => {
    let element = event.target as HTMLElement
    const isSelected = element.getAttribute("data-selected")
    if (isSelected === "true") {
        // delete tag to tagFilters
        element.setAttribute("data-selected", "false")
        const currentId = element.getAttribute("data-id")
        const index = currentFilters.value.findIndex(item => item.id === Number(currentId))
        currentFilters.value.splice(index, 1)
    } else {
        // append tag to tagFilters
        element.setAttribute("data-selected", "true")
        const currentId = element.getAttribute("data-id")
        currentFilters.value.push(TAGS.find(item => item.id === Number(currentId)) as Tag)
    }
}

</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
