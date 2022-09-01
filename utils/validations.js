const validateEvent = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Title is required'
  }
  if (!values.description) {
    errors.description = 'Description is required'
  }
  if (!values.host_doctor_name) {
    errors.host_doctor_name = 'Doctor name is Required'
  }
  if (!values.to) {
    errors.to = 'Duration is required'
  }
  if (!values.from) {
    errors.from = 'Duration is required'
  }
  if (!values.start_date) {
    errors.start_date = 'Start date is required'
  }
  return errors
}

export default validateEvent
