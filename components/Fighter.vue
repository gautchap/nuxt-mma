<script setup lang="ts">
import type { FighterType } from "@/utils/types/eventSchema";

const props = defineProps<{
    fighter: FighterType;
}>();
</script>

<template>
    <div class="card">
        <div class="card-header">
            <p class="card-title">{{ props.fighter.athlete.fullName }}</p>
            <NuxtImg
                :src="props.fighter.athlete.flag.href"
                :alt="props.fighter.athlete.flag.alt"
                width="24"
                height="24"
            />
        </div>
        <NuxtImg
            class="profile"
            :class="props.fighter.winner ? 'winner' : ''"
            provider="espn"
            :src="`/${props.fighter.id}.png`"
            :alt="props.fighter.athlete.fullName"
            width="132.11"
            height="96"
        />
    </div>
</template>

<style scoped>
.card-header {
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
}

.winner {
    border: 2px solid green;
}
.profile {
    width: 8em;
    margin-left: auto;
    margin-right: auto;
}
</style>
