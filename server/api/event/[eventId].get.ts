import { getUFCEventById } from "@/utils/events";
import { isEventLive } from "@/utils/format-event";

export default defineCachedEventHandler(async (event) => {
    const id = event.context.params?.eventId;
    if (!id) return null;
    const ufcEvent = await getUFCEventById(id);
    if (ufcEvent && isEventLive(ufcEvent)) {
        await useStorage("events").removeItem("nitro:functions:getUFCEvents:events.json");
    }

    return ufcEvent;
});
