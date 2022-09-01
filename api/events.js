import instance from 'api'

export const addEvent = (body) => instance.post('/event/create', body).then(response => response).catch(() => ({}))

export const fetchAllEvents = () => instance.get('/events').then(response => response.data).catch(() => ([]))

export const subscribeEvent = (eventId, email) => instance.post(`/event/userevents/${eventId}/${email}`).then(response => response).catch(() => ({}))

export const unsubscribeEvent = (eventId, email) => instance.delete(`/event/userevents/${eventId}/${email}`).then(response => response).catch(() => ({}))

export const fetchSubscribedEvents = () => instance.get('/event/attendees').then(response => response.data).catch(() => ({}))
