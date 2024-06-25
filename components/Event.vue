<script setup lang="ts">
import type { EventType } from "@/utils/types/eventSchema";
const { event } = defineProps<{
    event: EventType;
}>();

const eventDate = new Date(event.date).toLocaleDateString("fr-FR");
const fights = event.competitions.toReversed();
</script>

<template>
    <div>
        <h1>{{ event.name }}</h1>
        <h2>Date : {{ eventDate }}</h2>
        <ul>
            <li v-for="fight in fights">
                <div class="flex">
                    <Fighter :fighter="fight.competitors[0]" />
                    <p>vs</p>
                    <Fighter :fighter="fight.competitors[1]" />
                </div>
                <p v-if="fight.status.type.completed" class="round">
                    R {{ fight.status.period }} {{ fight.status.displayClock }}
                </p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.round {
    color: green;
}

.flex {
    display: flex;
    gap: 3px;
}
</style>
