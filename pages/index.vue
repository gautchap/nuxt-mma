<script setup lang="ts">
const { data: events } = await useFetch("/api/events");
const title = "UFC events in 2024";
useSeoMeta({
    title,
});
</script>

<template>
    <h1>{{ title }}</h1>
    <div v-if="events !== null">
        <EventList :events="events.futurEvents" title="Next" />
        <EventList :events="events.pastEvents" title="Past" />
    </div>
</template>
