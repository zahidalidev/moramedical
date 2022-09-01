import instance from 'api'

export const addEvent = (body) => instance.post('/event', body).then(response => response).catch(() => ({}))

export const fetchAllEvents = () => instance.get('/events').then(response => response.data).catch(() => ([]))

export const subscribeEvent = (eventId, email) => instance.post(`/event/${eventId}/${email}`).then(response => response).catch(() => ({}))

export const unsubscribeEvent = (eventId, email) => instance.delete(`/event/${eventId}/${email}`).then(response => response).catch(() => ({}))
