import React from 'react'
import { Formik } from 'formik'
import { AutoSaver, Field } from 'components/Forms'
import { Box, Heading } from '@hackclub/design-system'
import api from 'api'

const Form = Box.withComponent('form')

export default props => {
  const { application, authToken, updateApplicationList } = props

  const rejected_timestamp = application.rejected_at || (new Date).toISOString()
  const transformedApplication = {
    ...application,
    rejected_at: rejected_timestamp.substr(0, 10)
  }

  return (
    <Formik
      initialValues={transformedApplication}
      enableReinitialize={true}
      onSubmit={(values, { props, setSubmitting }) => {
        const transformedValues = { ...values }
        if (values.reject_duration) {
          transformedValues.reject_duration = values.reject_duration * 60
        }
        api
          .patch(`v1/new_club_applications/${values.id}`, {
            authToken,
            data: transformedValues
          })
          .then(json => {
            updateApplicationList(json)
            setSubmitting(false)
          })
          .catch(e => {
            setSubmitting(false)
          })
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values,
        ...props
      }) => (
        <Form onSubmit={handleSubmit}>
          <Heading.h2 mb={2}>Application #{values.id}</Heading.h2>
          <Field
            name="rejected_reason"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.rejected_reason || 'select'}
            type="select"
          >
            <option value="select" disabled>
              Select One
            </option>
            <option value="other">Other</option>
          </Field>
          <Field
            name="rejected_notes"
            label="Rejection notes"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.rejected_notes}
            type="textarea"
            bg="rgba(250,247,133,0.5)"
            renderMarkdown
          />
          <Field
            name="rejected_at"
            label="Reject date"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.rejected_at}
            type="date"
          />
          <AutoSaver
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            values={values}
          />
        </Form>
      )}
    </Formik>
  )
}
