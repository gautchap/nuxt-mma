<script setup lang="ts">
import type { FighterType } from "@/utils/types/eventSchema";

defineProps<{
    fighter: FighterType;
}>();
</script>

<template>
    <div :class="fighter.winner ? 'border-green-500' : ''" class="overflow-hidden border rounded-full size-32">
        <NuxtImg
            class="object-cover w-full h-full rounded-lg"
            provider="espn"
            :src="`/${fighter.id}.png`"
            :alt="fighter.athlete.fullName"
            width="132.11"
            height="96"
            placeholder="/no-profile.png"
        />
    </div>
</template>
