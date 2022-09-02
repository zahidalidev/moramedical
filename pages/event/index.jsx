import { Box, Paper, Typography } from '@mui/material'
import Card from '@mui/joy/Card'
import { isEmpty } from 'lodash'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { AppBar, LoadingModal, Form } from 'components'
import { addEvent } from 'api/events'
import eventFields from 'utils/constants/events'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import validateEvent from 'utils/validations'

import styles from './styles.module.scss'

const CreateEvent = () => {
  const [loading, setloading] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()
  const [productFieldsInitialValues] = useState({
    title: '',
    description: '',
    host_doctor_name: '',
    from: '',
    to: '',
    start_date: '',
  })

  const handleEvent = async (values) => {
    setloading(true)
    if (session) {
      const EventBody = { ...values }
      const response = await addEvent(EventBody)
      if (!isEmpty(response)) {
        toast.success('Event Created')
      } else {
        toast.error('Event not Added')
      }
    } else {
      router.push('/auth/signin')
    }
    setloading(false)
  }
  return (
    <>
      <AppBar />
      <Box className={styles.addProductContainer}>
        <LoadingModal show={loading} />
        <Paper elevation={3} className={styles.materialPaper}>
          <Card className={styles.matCard}>
            <Typography variant='h4'>Create an Event</Typography>
            <Form
              fieldsInitialValues={productFieldsInitialValues}
              handleSubmition={handleEvent}
              validate={validateEvent}
              fields={eventFields}
            />
          </Card>
        </Paper>
      </Box>
    </>
  )
}

export default CreateEvent
