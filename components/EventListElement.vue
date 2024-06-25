<script setup lang="ts">
import type { EventType } from "@/utils/types/eventSchema";
import { isEventLive } from "@/utils/format-event";

const props = defineProps<{
    event: EventType;
}>();

const eventDate = new Date(props.event.date).toLocaleDateString("fr-FR");
const mainEvent = props.event.competitions.toReversed()[0];
const isLive = isEventLive(props.event);
</script>

<template>
    <NuxtLink :to="`/event/${props.event.id}`">
        <div class="border">
            <h2 class="text-center">{{ eventDate }}</h2>
            <h2 class="text-center">{{ props.event.name }}</h2>
            <div class="flex justify-evenly">
                <FighterImg :fighter="mainEvent.competitors[0]" />
                <div class="w-6">
                    <div v-if="isLive" class="flex items-center gap-1">
                        <span class="relative flex h-3 w-3">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                            ></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span class="text-red-500 font-bold">Live</span>
                    </div>
                </div>
                <FighterImg :fighter="mainEvent.competitors[1]" />
            </div>
        </div>
    </NuxtLink>
</template>
