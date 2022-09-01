import {
  Box, Paper, Typography, Card,
} from '@mui/material'
import { useEffect, useState } from 'react'

import { AppBar } from 'components'
// import Table from 'components/Table'
import { fetchSubscribedEvents } from 'api/events'

import styles from './styles.module.scss'

const Attendees = ({ attendees }) => {
  const [loading] = useState(false)
  console.log(loading, attendees)

  useEffect(() => {
    const attendeesTemp = fetchSubscribedEvents()
    console.log('attendeesTemp: ', attendeesTemp)
  }, [])

  // const handleAction = (type, id) => {
  //   console.log(type, id)
  // }

  // const eventColumns = [
  //   {
  //     name: 'Event name',
  //     selector: (row) => row.event,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Event Start date',
  //     selector: (row) => row.startDate,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Product name',
  //     selector: (row) => row.duration,
  //     wrap: true,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Attendee',
  //     selector: (row) => row.attendee,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Action',
  //     selector: (row) => (
  //       <Typography className={styles.cancelAcion}
  // onClick={() => handleAction('remove', row.id)}>
  //         Cancel
  //       </Typography>
  //     ),
  //   },
  // ]

  // const events = [
  //   {
  //     id: '0',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '1',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '2',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '3',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '4',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '5',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '6',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '7',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '8',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '9',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '10',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '11',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '12',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '13',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  //   {
  //     id: '14',
  //     event: 'Test Event',
  //     startDate: '01/22/2022',
  //     duration: '10AM to 12AM',
  //     attendee: 'test user',
  //   },
  // ]

  return (
    <>
      <AppBar />
      <Box className={styles.container}>
        <Typography variant='h4'>All Event&apos;s Attendees</Typography>
        <Paper className={styles.materialPaper} elevation={2}>
          <Card className={styles.materialCard}>
            {/* <Table data={attendees} count={10} columns={eventColumns} loading={loading} /> */}
          </Card>
        </Paper>
      </Box>
    </>
  )
}

// export const getStaticProps = async () => {
//   const attendees = await fetchSubscribedEvents()
//   console.log('attendees: ', attendees)
//   return {
//     props: {
//       attendees,
//     },
//     revalidate: 10,
//   }
// }

export default Attendees
