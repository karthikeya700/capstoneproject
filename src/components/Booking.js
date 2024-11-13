import React from 'react'
import BookingForm from './BookingForm';

const Booking = (props) => {
  return (
    <BookingForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} SumbitForm = {props.SumbitForm}/>
  )
};

export default Booking;
