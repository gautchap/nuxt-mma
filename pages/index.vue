<script setup lang="ts">
const { data: events } = await useFetch("/api/events");
</script>

<template>
    <div>
        <h2>Events</h2>
        <ul>
            <li v-for="event in events">
                <NuxtLink :to="`/event/${event.id}`">{{ event.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
