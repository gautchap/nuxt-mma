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
                    <p>{{ fight.competitors[0].athlete.fullName }} <b v-if="fight.competitors[0].winner">W</b></p>
                    <p>vs</p>
                    <p>{{ fight.competitors[1].athlete.fullName }} <b v-if="fight.competitors[1].winner">W</b></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    gap: 3px;
}
</style>
