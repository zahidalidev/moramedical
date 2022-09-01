import {
  Box, Paper, Typography, Card,
} from '@mui/material'
import { useState } from 'react'

import { AppBar } from 'components'
import { fetchSubscribedEvents, unsubscribeEvent } from 'api/events'
import { isEmpty } from 'lodash'
import LoadingModal from 'components/LoadingModal'
import Table from 'components/Table'
import { toast } from 'react-toastify'

import styles from './styles.module.scss'

const Attendees = ({ attendees }) => {
  const [loading, setLoading] = useState(false)

  const handleAction = async (eventId, userEmail) => {
    setLoading(true)
    console.log((eventId, userEmail))
    const res = await unsubscribeEvent(eventId, userEmail)
    if (!isEmpty(res)) {
      toast.success('Event Unsubscribed')
    } else {
      toast.error('Event not Unsubscribed')
    }
    setLoading(false)
  }

  const eventColumns = [
    {
      name: 'Event name',
      selector: ({ event }) => event.title,
      sortable: true,
    },
    {
      name: 'Event Start date',
      selector: ({ event }) => event.start_date,
      sortable: true,
    },
    {
      name: 'Duration',
      selector: ({ event }) => `${event.from} - ${event.to}`,
      wrap: true,
      sortable: true,
    },
    {
      name: 'Attendee',
      selector: ({ user }) => user?.name,
      sortable: true,
    },
    {
      name: 'Action',
      selector: ({ user, event }) => (
        <Typography
          className={styles.cancelAcion}
          onClick={() => handleAction(event?.id, user?.email)}
        >
          Remove attendee
        </Typography>
      ),
    },
  ]

  return (
    <>
      <AppBar />
      <LoadingModal show={loading} />
      <Box className={styles.container}>
        <Typography variant='h4'>All Event&apos;s Attendees</Typography>
        <Paper className={styles.materialPaper} elevation={2}>
          <Card className={styles.materialCard}>
            <Table data={attendees} count={10} columns={eventColumns} loading={loading} />
          </Card>
        </Paper>
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const attendees = await fetchSubscribedEvents()
  return {
    props: {
      attendees,
    },
    revalidate: 10,
  }
}

export default Attendees
