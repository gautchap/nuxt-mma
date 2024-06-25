<script setup lang="ts">
import type { FighterType } from "@/utils/types/eventSchema";

const props = defineProps<{
    fighter: FighterType;
    position: "left" | "right";
}>();
</script>

<template>
    <div class="flex flex-col" :class="position === 'left' ? 'items-start' : 'items-end'">
        <div class="flex items-center justify-center">
            <p>{{ props.fighter.athlete.fullName }}</p>
            <NuxtImg
                :src="props.fighter.athlete.flag.href"
                :alt="props.fighter.athlete.flag.alt"
                width="24"
                height="24"
            />
        </div>
        <div class="text-center">
            <FighterImg :fighter="props.fighter" />
            <p>{{ fighter.records![0].summary }}</p>
        </div>
    </div>
</template>
