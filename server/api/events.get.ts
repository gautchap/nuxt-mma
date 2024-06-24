import { getUFCEvents } from "@/utils/events";
import { getFormatEvent } from "@/utils/format-event";

export default defineCachedEventHandler(async () => {
    const events = await getUFCEvents();
    const { futurEvents, pastEvents } = getFormatEvent(events);
    return { futurEvents, pastEvents };
});
