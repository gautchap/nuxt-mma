<script setup lang="ts">
import type { FighterType } from "@/utils/types/eventSchema";

const props = defineProps<{
    fighter: FighterType;
}>();
</script>

<template>
    <p :class="props.fighter.winner ? 'winner' : ''">{{ props.fighter.athlete.fullName }}</p>
</template>

<style scoped>
.winner {
    background-color: green;
    color: white;
}
</style>
