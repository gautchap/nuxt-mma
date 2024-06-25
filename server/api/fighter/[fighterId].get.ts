import { getFighterById } from "@/utils/fighter";

export default defineCachedEventHandler(async (event) => {
    const id = event.context.params?.fighterId;
    if (!id) return null;
    const fighter = await getFighterById(id);
    return fighter;
});
