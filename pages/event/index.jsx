import { Box, Paper, Typography } from '@mui/material'
import Card from '@mui/joy/Card'
import { useState } from 'react'

import { AppBar, LoadingModal, Form } from 'components'
import { eventFields } from 'utils/constants/events'
import validateEvent from 'utils/validations'

import styles from './styles.module.scss'

const CreateEvent = () => {
  const [loading, setloading] = useState(false)
  const [productFieldsInitialValues] = useState({
    title: '',
    description: '',
    hostDoctorName: '',
    duration: '',
    startDate: '',
  })

  const handleEvent = async (values) => {
    setloading(true)
    console.log(values)
    setloading(false)
  }

  return (
    <>
      <AppBar />
      <Box className={styles.addProductContainer}>
        <LoadingModal show={loading} />
        <Paper elevation={3} className={styles.materialPaper}>
          <Card className={styles.matCard}>
            <Typography variant='h4'>
              Create an Event
            </Typography>
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
