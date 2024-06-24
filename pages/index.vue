<script setup lang="ts">
const { data: events } = await useFetch("/api/events");
const title = "UFC events in 2024";
useSeoMeta({
    title,
});
</script>

<template>
    <h1>{{ title }}</h1>
    <div>
        <h2>Past Events</h2>
        <ul>
            <li v-for="event in events?.pastEvents">
                <NuxtLink :to="`/event/${event.id}`">{{ event.name }}</NuxtLink>
            </li>
        </ul>
    </div>
    <div>
        <h2>Future Events</h2>
        <ul>
            <li v-for="event in events?.futurEvents">
                <NuxtLink :to="`/event/${event.id}`">{{ event.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
