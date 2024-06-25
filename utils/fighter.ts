import { fighterSchema } from "@/utils/types/fighterSchema";
import { isDevelopment } from "@/utils/types/envSchema";

export const getFighterById = defineCachedFunction(
    async (id: string) => {
        const fighter = await $fetch(`${process.env.API_URL}/player-details?fighterId=${id}`, {
            headers: {
                "x-rapidapi-key": process.env.API_KEY,
                "x-rapidapi-host": process.env.API_HOST,
            },
            cache: "force-cache",
        });

        try {
            const parsed = fighterSchema.parse(fighter);
            return parsed;
        } catch (e) {
            console.error(e);
            throw new Error("Failed to parse fighter");
        }
    },
    {
        base: isDevelopment ? "events" : "cache",
        name: "getFighterById",
        getKey: (id: string) => "fighter/" + id,
        shouldBypassCache: () => false,
        maxAge: 60 * 60 * 24,
    }
);
