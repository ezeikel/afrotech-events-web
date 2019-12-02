import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const CREATE_EVENT = gql`
mutation createEvent(
  $name: String!,
  $host: String!,
  $date: Date!,
  $address: String!,
  $rsvpLink: String,
  $notes: String,
  ) {
    createEvent(
      name: $name
      host: $host
      date: $date
      address: $address
      rsvpLink: $rsvpLink
      notes: $notes
    ) {
      id,
      name,
      host
    }
  }
`;

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: var(--box-shadow);
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-last-of-type(2) {
    margin-bottom: 64px;
  }
  ${({ multiple }) => {
    return multiple ? `
      span {
        &:first-of-type {
          margin-bottom: 32px
        }
      }
      ` : '';
    }};
  @media (min-width: 768px) {
    flex: 0 1 50%;
    ${({ multiple }) => {
    return multiple ? `
      display: flex;
      flex-direction: row;
      span {
        flex: 0 0 50%;
        &:first-of-type {
          padding-right: var(--spacing-small);
        }
        &:last-of-type {
          padding-left: var(--spacing-small);
        }
      }
      ` : '';
    }};
    &:nth-of-type(odd) {
      padding-right: 16px;
    }
    &:nth-of-type(even) {
      padding-left: 16px;
    }

    &:last-of-type, &:nth-last-of-type(2) {
      flex: 1 1 100%;
      padding: 0;
    }
  }
`;

const Label = styled.label`
  display: flex;
  color: var(--color-black);
  text-transform: capitalize;
  font-size: 18px;
  margin: 0 0 8px 0;
`;

const StyledField = styled(Field)`
  font-size: 20px;
`;

const StyledButton = styled.button`
  background-color: #8E193E;
  border-radius: var(--border-radius);
  color: var(--color-white);
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
  box-shadow: var(--box-shadow);
  @media (min-width: 768px) {
    flex: 0 0 100%;
  }
`;

const EventSchema = yup.object().shape({
  eventName: yup.string().required('First Name is required.'),
  host: yup.string().required('Last Name is required.'),
  date: yup.string().required('Last Name is required.'),
  time: yup.string().required('Last Name is required.'),
  location: yup.string().required('Last Name is required.'),
  rsvpLink: yup.string().required('Last Name is required.'),
  notes: yup.string().required('Last Name is required.')
});

const EventForm = () => {
  const [createEvent, { data }] = useMutation(CREATE_EVENT);

  return (
    <Formik
      initialValues={{ eventName: '', host: '', date: '', time: '', location: '', rsvpLink: '', notes: '' }}
      validationSchema={EventSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {

        console.log({ values, actions });
        try {
          await createEvent({
            variables: values
          });
          resetForm();
        } catch(e) {
          setErrors(e);
        }

        setSubmitting(false);
      }}
    >
      {({
        isValid,
        touched,
        isSubmitting,
        errors
      }) => (
        <FormWrapper>
          {isValid}
          <FieldWrapper>
            <Label htmlFor="eventName">Event Name</Label>
            <StyledField type="text" name="eventName" />
            <ErrorMessage name="eventName">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="host">Host</Label>
            <StyledField type="text" name="host" />
            <ErrorMessage name="host">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="date">Date</Label>
            <StyledField type="text" name="date" />
            <ErrorMessage name="date">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </FieldWrapper>
          <FieldWrapper multiple={true}>
            <span>
              <Label htmlFor="time">Start Time</Label>
              <StyledField type="text" name="startTime" />
              <ErrorMessage name="startTime">{msg => <div className="error">{msg}</div>}</ErrorMessage>
            </span>
            <span>
              <Label htmlFor="time">End Time</Label>
              <StyledField type="text" name="EndTime" />
              <ErrorMessage name="EndTime">{msg => <div className="error">{msg}</div>}</ErrorMessage>
            </span>
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="location">Location</Label>
            <StyledField type="text" name="location" />
            <ErrorMessage name="location">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="rvspLink">RSVP Link</Label>
            <StyledField type="text" name="rsvpLink" />
            <ErrorMessage name="rsvpLink">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="notes">Notes (optional)</Label>
            <StyledField type="textarea" name="notes" />
            <ErrorMessage name="notes">{msg => <div className="error">{msg}</div>}</ErrorMessage>
          </FieldWrapper>
          <FieldWrapper>
            <StyledButton type="submit" disabled={isSubmitting }>Submit{isSubmitting ? 'ing' : null}</StyledButton>
          </FieldWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default EventForm;
