import instance from 'api'

export const addEvent = (body) => instance.post('/events', body).then(response => response).catch(() => ({}))

export const fetchAllEvents = () => instance.get('/events').then(response => response.data).catch(() => ({}))
