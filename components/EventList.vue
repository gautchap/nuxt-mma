<script setup lang="ts">
import type { EventListType } from "@/utils/types/eventSchema";

defineProps<{
    title: string;
    events: EventListType;
}>();
</script>

<template>
    <div class="my-6">
        <h2>{{ title }} Events</h2>
        <ul>
            <li v-for="event in events" class="my-2">
                <EventListElement :event="event" />
            </li>
        </ul>
    </div>
</template>
