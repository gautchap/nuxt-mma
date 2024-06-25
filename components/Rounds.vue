<script setup lang="ts">
import type { FightType } from "@/utils/types/eventSchema";

defineProps<{
    fight: FightType;
    winner: boolean;
}>();
</script>

<template>
    <p class="text-green-500" :class="winner ? 'text-start' : 'text-end'">
        R{{ fight.status.period }} {{ fight.status.displayClock }}
    </p>
</template>
