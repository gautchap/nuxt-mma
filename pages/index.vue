<script setup lang="ts">
const { data: events } = await useFetch("/api/events");
useSeoMeta({
    title: "UFC events",
});
</script>

<template>
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
