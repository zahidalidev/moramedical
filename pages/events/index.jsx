import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { isEmpty } from 'lodash'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import { AppBar } from 'components'
import { fetchAllEvents, subscribeEvent, unsubscribeEvent } from 'api/events'
import LoadingModal from 'components/LoadingModal'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

const Events = ({ events }) => {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [allEvents, setAllEvents] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin')
    } else {
      setAllEvents(events)
    }
  }, [])

  const handleAddSubscription = async (eventId, index) => {
    setLoading(true)
    if (session) {
      const oldEvents = [...allEvents]
      const tempEvent = [...allEvents]
      tempEvent[index].users_events = [{ user_id: session.user.id }]
      setAllEvents(tempEvent)
      const res = await subscribeEvent(eventId, session.user.id)
      if (!isEmpty(res)) {
        toast.success('Event Subscribed')
      } else {
        setAllEvents(oldEvents)
        toast.error('Event not Subscribed')
      }
    } else {
      router.push('/auth/signin')
    }
    setLoading(false)
  }

  const handleRemoveSubscription = async (eventId, index) => {
    setLoading(true)
    if (session) {
      const oldEvents = [...allEvents]
      const tempEvent = [...allEvents]
      tempEvent[index].users_events = []
      setAllEvents(tempEvent)
      const res = await unsubscribeEvent(eventId, session.user.id)
      if (!isEmpty(res)) {
        toast.success('Event Unsubscribed')
      } else {
        setAllEvents(oldEvents)
        toast.error('Event not Unsubscribed')
      }
    } else {
      router.push('/auth/signin')
    }
    setLoading(false)
  }

  const EventSubscribedComponent = ({ id, index }) => (
    <>
      <Button disabled className={styles.subscribedBtn} variant='contained' size='small'>
        Event Subscribed
      </Button>
      <Button onClick={() => handleRemoveSubscription(id, index)} variant='outlined' size='small'>
        Unsubscribe event
      </Button>
    </>
  )

  return (
    <>
      <AppBar />
      <LoadingModal show={loading} />
      <Box className={styles.container}>
        <Typography align='left' width='98%' variant='h4'>All Public Events</Typography>
        <Box className={styles.eventsContainer}>
          {allEvents?.map((event, index) => (
            <Paper key={event.id} elevation={3} className={styles.card}>
              <CardContent>
                <Typography variant='h5' component='div'>
                  {event.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  Host: {event.hostDoctorName}
                </Typography>
                <Typography variant='body2'>{event.description}</Typography>
                <Box className={styles.dateBox}>
                  <Typography className={styles.startDate} size='small'>
                    {event.startDate}
                  </Typography>
                  <Typography size='small'>
                    from {event.from} - {event.to}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions className={styles.cardAction}>
                {event.users_events[0]?.user_id ? (
                  <EventSubscribedComponent id={event.id} index={index} />
                ) : (
                  <Button
                    onClick={() => handleAddSubscription(event.id, index)}
                    variant='outlined'
                    size='small'
                  >
                    Subscribe event
                  </Button>
                )}
              </CardActions>
            </Paper>
          ))}
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const events = await fetchAllEvents()
  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}

export default Events
