import { getUFCEventById } from "@/utils/events";
import { isEventLive } from "@/utils/format-event";
import { isDevelopment } from "@/utils/types/envSchema";

export default defineCachedEventHandler(async (event) => {
    const id = event.context.params?.eventId;
    if (!id) return null;
    const ufcEvent = await getUFCEventById(id);
    if (ufcEvent && isEventLive(ufcEvent)) {
        await useStorage(isDevelopment ? "events" : "cache").removeItem("nitro:functions:getUFCEvents:events.json");
    }

    return ufcEvent;
});
