import {
  Button, CardContent, TextField, Typography,
} from '@mui/material'
import { Fragment } from 'react'
import { Formik } from 'formik'
import { isEmpty } from 'lodash'

import styles from './styles.module.scss'

const Form = ({
  fieldsInitialValues, handleSubmition, validate, fields,
}) => (
  <CardContent className={styles.materialCard}>
    <Formik
      initialValues={fieldsInitialValues}
      enableReinitialize
      validate={validate}
      onSubmit={handleSubmition}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit,
      }) => (
        <form className={styles.materialForm} onSubmit={handleSubmit}>
          {fields.map((field) => (
            <Fragment key={field.name}>
              <TextField
                className={styles.textField}
                fullWidth
                label={field.label}
                type={field.type}
                name={field.name}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[field.name]}
              />
              <Typography className={styles.warnTypography}>
                {errors[field.name] && touched[field.name] && errors[field.name]}
              </Typography>
            </Fragment>
          ))}

          <Button
            className={styles.submitButton}
            type='submit'
            disabled={!isEmpty(errors)}
            variant='contained'
            size='large'
          >
            Create
          </Button>
        </form>
      )}
    </Formik>
  </CardContent>
)

export default Form
