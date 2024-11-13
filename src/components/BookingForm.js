import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false); // State to track if booking is confirmed

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking");
        setIsConfirmed(true); // Set state to true to show confirmation
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    return (
        <div>
            <header>
                <section>
                    {!isConfirmed ? (
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <div>
                                    <label htmlFor='book-date'>Choose Date:</label>
                                    <input
                                        id='book-date'
                                        value={date}
                                        onChange={(e) => handleChange(e.target.value)}
                                        type='date'
                                        required
                                    />
                                </div>

                                {/* Time selection */}
                                <div>
                                    <label htmlFor='book-time'>Choose Time:</label>
                                    <select
                                        id='book-time'
                                        value={times}
                                        onChange={(e) => setTimes(e.target.value)}
                                    >
                                        <option value="">Select a Time</option>
                                        {props.availableTimes.availableTimes.map((availableTime) => (
                                            <option key={availableTime}>{availableTime}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Number of guests */}
                                <div>
                                    <label htmlFor='book-guests'>Number of Guests:</label>
                                    <input
                                        id='book-guests'
                                        type="number"
                                        min='1'
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                    />
                                </div>

                                {/* Occasion field */}
                                <div>
                                    <label htmlFor='book-occasion'>Occasion:</label>
                                    <select
                                        id='book-occasion'
                                        key={occasion}
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                    >
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                    </select>
                                </div>

                                {/* Submit button */}
                                <div className='btnReceive'>
                                    <input aria-label='On Click' type='submit' value={"Make your Reservation"} />
                                </div>
                            </fieldset>
                        </form>
                    ) : (
                        <div className='confirm'>
                            <h1>Booking has been <span>confirmed!</span></h1>
                        </div>
                    )}
                </section>
            </header>
        </div>
    );
};

export default BookingForm;

