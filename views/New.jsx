const React = require("react");

function New() {
  const oneYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  const oneYearString = oneYear.toISOString().slice(0,-8);

  return (
    <div>
      <h1>Add New Flight</h1>

      <form action="/" method="POST">
        <label>
          Airline:
          <select type="String" name="airline" required>
            <option></option>
            <option>American</option>
            <option>Southwest</option>
            <option>United</option>
          </select>
        </label>
        <br />
        <br />

        <label>
          Flight Number: <input type="Number" name="flightNo" required />
        </label>
        <br />
        <br />

        <label>
          Flight Date & Time: <input type="datetime-local" name="departs" defaultValue={oneYearString} />
        </label>
        <br />
        <br />

        <input type="submit" name="" value="Create Flight" />
        <br />
        <br />
      </form>

      <a href="/">Back to Home</a>
    </div>
  );
}

module.exports = New;
