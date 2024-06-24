import { EnvSchemaType } from "@/utils/types/envSchema";

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvSchemaType {}
    }
}
