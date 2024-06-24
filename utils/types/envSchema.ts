import z from "zod";

const envSchema = z.object({
    API_KEY: z.string().trim().min(1),
    API_HOST: z.string().trim().min(1),
    API_URL: z.string().url().trim().min(1),
    PORT: z.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const envServer = envSchema.safeParse({
    API_KEY: process.env.API_KEY,
    API_HOST: process.env.API_HOSTs,
    API_URL: process.env.API_URL,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
});

if (!envServer.success) {
    throw new Error("There is an error with the server environment variables");
}

export const isDevelopment = process.env.NODE_ENV === "development";
export type EnvSchemaType = z.infer<typeof envSchema>;
