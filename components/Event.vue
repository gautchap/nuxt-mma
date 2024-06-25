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
            <li class="my-5" v-for="fight in fights">
                <div class="flex justify-between">
                    <Fighter position="left" :fighter="fight.competitors[0]" />
                    <p>vs</p>
                    <Fighter position="right" :fighter="fight.competitors[1]" />
                </div>
                <Rounds v-if="fight.status.type.completed" :fight="fight" :winner="fight.competitors[0].winner" />
            </li>
        </ul>
    </div>
</template>
