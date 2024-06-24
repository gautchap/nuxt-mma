<script setup lang="ts">
import { eventSchema } from "@/utils/types/eventSchema";

const route = useRoute();
const { data: event } = await useFetch(`/api/event/${route.params.eventId}`, {
    transform: (res) => eventSchema.parse(res),
});

useSeoMeta({
    title: event?.value?.name,
});
</script>

<template>
    <NuxtLink to="/">← Retour</NuxtLink>
    <div v-if="event === null">L'événement n'existe pas</div>
    <Event v-if="event !== null" :event="event" />
</template>
