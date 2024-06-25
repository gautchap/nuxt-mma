import { record, z } from "zod";

const fighterSchema = z.object({
    id: z.string(),
    winner: z.boolean(),
    athlete: z.object({
        fullName: z.string(),
        flag: z.object({
            href: z.string().url(),
            alt: z.string(),
        }),
    }),
    records: z
        .array(
            z.object({
                summary: z.string(),
            })
        )
        .optional(),
});

const fightSchema = z.object({
    id: z.string(),
    date: z.string(),
    type: z
        .object({
            abbreviation: z.string(),
        })
        .optional(),
    competitors: z.array(fighterSchema),
    status: z.object({
        displayClock: z.string(),
        period: z.coerce.number(),
        type: z.object({
            completed: z.boolean(),
        }),
    }),
    format: z.object({
        regulation: z.object({
            periods: z.coerce.number(),
        }),
    }),
});

export const eventSchema = z.object({
    id: z.string(),
    date: z.string(),
    name: z.string(),
    shortName: z.string(),
    competitions: z.array(fightSchema),
    venues: z.array(
        z.object({
            id: z.string(),
            fullName: z.string(),
            address: z.object({
                city: z.string(),
                state: z.string().optional(),
                country: z.string().optional(),
            }),
        })
    ),
});

export const eventListSchema = z.array(eventSchema);

export type FighterType = z.infer<typeof fighterSchema>;
export type FightType = z.infer<typeof fightSchema>;
export type EventType = z.infer<typeof eventSchema>;
export type EventListType = z.infer<typeof eventListSchema>;
