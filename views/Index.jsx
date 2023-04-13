const React = require("react");

function Index(props) {
  const { flights } = props;

  return (
    <div>
      <h1>Home Page</h1>

      <h2 className="ul-header">Flights</h2>

      <ul>
        {flights.length >= 1
          ? flights.map((flight) => {
              return (
                <li key={flight._id}>
                  <a href={`/flight/${flight._id}`}>{flight.airline} {flight.flightNo}</a>
                </li>
              );
            })
          : "There are no flights to display at this time."}
      </ul>

      <a href="/new">Create a new flight</a>
    </div>
  );
}

module.exports = Index;
