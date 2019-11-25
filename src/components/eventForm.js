import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: var(--box-shadow);
  width: 100%;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;
`;


const Label = styled.label`
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

const EventForm = () => (
  <Formik
    initialValues={{ eventName: '', host: '', date: '', time: '', location: '', rsvpLink: '', notes: '' }}
    validationSchema={EventSchema}
    onSubmit={(values, actions) => {
      console.log(actions);
    }}
  >
    {({
      isValid,
      isSubmitting
    }) => (
      <FormWrapper>
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
        <FieldWrapper>
          <Label htmlFor="time">Time</Label>
          <StyledField type="text" name="time" />
          <ErrorMessage name="time">{msg => <div className="error">{msg}</div>}</ErrorMessage>
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
          <Label htmlFor="notes">Notes</Label>
          <StyledField type="text" name="notes" />
          <ErrorMessage name="notes">{msg => <div className="error">{msg}</div>}</ErrorMessage>
        </FieldWrapper>
        <FieldWrapper>
          <StyledButton type="submit" disabled={isSubmitting || !isValid }>Submit{isSubmitting ? 'ing' : null}</StyledButton>
        </FieldWrapper>
      </FormWrapper>
    )}
  </Formik>
);

export default EventForm;
