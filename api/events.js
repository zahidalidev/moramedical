import instance from 'api'

export const addEvent = (body) => instance.post('/event/create', body).then(response => response).catch(() => ({}))

export const fetchAllEvents = () => instance.get('/events').then(response => response.data).catch(() => ([]))

export const subscribeEvent = (eventId, userId) => instance.post(`/event/userevents/${eventId}/${userId}`).then(response => response).catch(() => ({}))

export const unsubscribeEvent = (eventId, userId, email = '', event = '') => instance.delete(`/event/userevents/${eventId}/${userId}?email=${email}&event=${event}`).then(response => response).catch(() => ({}))

export const fetchSubscribedEvents = () => instance.get('/event/attendees').then(response => response.data).catch(() => ({}))
