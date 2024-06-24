import { getUFCEvents } from "@/utils/events";

export default defineCachedEventHandler(async () => {
    const events = await getUFCEvents();
    return events;
});
