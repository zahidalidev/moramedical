const validateEvent = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Title is required'
  }
  if (!values.description) {
    errors.description = 'Description is required'
  }
  if (!values.hostDoctorName) {
    errors.hostDoctorName = 'Doctor name is Required'
  }
  if (!values.duration) {
    errors.duration = 'Duration is required'
  }
  if (!values.startDate) {
    errors.startDate = 'Start date is required'
  }
  return errors
}

export default validateEvent
