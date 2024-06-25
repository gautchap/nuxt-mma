import { z } from "zod";

export const fighterSchema = z.object({
    fighter_full_detail: z.object({
        athlete: z.object({
            active: z.boolean(),
            age: z.coerce.number(),
            citizenship: z.string(),
            displayDOB: z.string(),
            displayFightingStyle: z.string(),
            displayHeight: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            displayReach: z.string(),
            displayWeight: z.string(),
            flag: z.object({
                href: z.string().url(),
                alt: z.string(),
            }),
            headshot: z.object({
                href: z.string().url(),
                alt: z.string(),
            }),
            id: z.string(),
            nickname: z.string(),
            statsSummary: z.object({
                statistics: z.array(z.object({ displayValue: z.string() })),
            }),
            weightClass: z.object({
                text: z.string(),
            }),
        }),
    }),
});

export type FighterType = z.infer<typeof fighterSchema>;
