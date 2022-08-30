import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'

import { AppBar } from 'components'
import events from 'utils/constants/events'

import styles from './styles.module.scss'

const Events = () => (
  <>
    <AppBar />
    <Box className={styles.container}>
      <Typography variant='h4'>All Public Events</Typography>
      <Box className={styles.eventsContainer}>
        {events.map((event) => (
          <Paper elevation={3} className={styles.card}>
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
                <Typography className={styles.duration} size='small'>
                  from {event.duration}
                </Typography>
              </Box>
            </CardContent>
            <CardActions className={styles.cardAction}>
              <Button variant='outlined' size='small'>
                Subscribe event
              </Button>
              <Button variant='outlined' size='small'>
                Unsubscribe event
              </Button>
            </CardActions>
          </Paper>
        ))}
      </Box>
    </Box>
  </>
)

export default Events
