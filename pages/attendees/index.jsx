import {
  Box, Paper, Typography, Card,
} from '@mui/material'
import { useEffect, useState } from 'react'

import { AppBar } from 'components'
import Table from 'components/Table'
import { fetchSubscribedEvents } from 'api/events'

import styles from './styles.module.scss'

const Attendees = ({ attendees }) => {
  const [loading] = useState(false)
  const handleAction = (type, id) => {
    console.log(type, id)
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
        <Typography className={styles.cancelAcion} onClick={() => handleAction('remove', user?.id, event?.id)}>
          Cancel
        </Typography>
      ),
    },
  ]

  return (
    <>
      <AppBar />
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
