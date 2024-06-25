import { eventListSchema } from "@/utils/types/eventSchema";
import { getScheduleEvents } from "@/utils/format-event";
import { isDevelopment } from "@/utils/types/envSchema";

export const getUFCEvents = defineCachedFunction(
    async () => {
        const year = new Date().getFullYear();
        const events = await $fetch(`${process.env.API_URL}/scoreboard?year=${year}&league=ufc`, {
            headers: {
                "x-rapidapi-key": process.env.API_KEY,
                "x-rapidapi-host": process.env.API_HOST,
            },
            cache: "force-cache",
        });

        try {
            const parsed = eventListSchema.parse(events);
            return getScheduleEvents(parsed);
        } catch (e) {
            console.error(e);
            return [];
        }
    },
    {
        base: isDevelopment ? "events" : "cache",
        name: "getUFCEvents",
        getKey: () => "events",
        shouldBypassCache: () => false,
        maxAge: 60 * 60 * 24,
    }
);

export const getUFCEventById = defineCachedFunction(async (id: string) => {
    const events = await getUFCEvents();
    return events.find((e) => e.id === id);
});
