const React = require('react');

function Show(props) {
    const {flight} = props;

    return (
        <div>
            <h1>{flight.airline} Airlines Flight {flight.flightNo}</h1>

            <p>Departure: {flight.departs.toLocaleString()}.</p>

            <a href='/'>Back to Home</a>
        </div>
    )
}

module.exports = Show;