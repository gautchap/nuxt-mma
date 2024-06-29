import type { EventListType, EventType } from "@/utils/types/eventSchema";

export function getFightsAnnounced(event: EventType) {
    const announced = [] as EventType["competitions"];

    for (const fight of event.competitions) {
        if (fight.competitors.every((competitor) => !competitor.athlete.fullName.includes("TBA"))) {
            announced.push(fight);
        }
    }
    return announced;
}

export function getScheduleEvents(events: EventListType) {
    const schedule = [] as EventListType;

    for (const event of events) {
        const announced = getFightsAnnounced(event);
        if (announced.length > 0) {
            event.competitions = getFightsAnnounced(event);
            schedule.push(event);
        }
    }

    return schedule;
}

export function getFormatEvent(events: EventListType) {
    const futurEvents = [] as EventListType;
    const pastEvents = [] as EventListType;

    for (const event of events) {
        const eventDate = new Date(event.date);
        const today = new Date();
        if (today > eventDate) {
            pastEvents.push(event);
        } else {
            futurEvents.push(event);
        }
    }

    pastEvents.reverse();

    return { futurEvents, pastEvents };
}

export function isEventLive(event: EventType) {
    const eventDateStart = new Date(event.date);
    const eventDateEnd = new Date(eventDateStart);
    const now = new Date();

    eventDateEnd.setMinutes(eventDateEnd.getMinutes() + event.competitions.length * 30);

    if (eventDateStart < now && now < eventDateEnd) {
        return true;
    }
    return false;
}
