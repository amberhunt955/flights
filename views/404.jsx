const React = require('react');

function NotFound() {

    return (
        <div>
            <h1>404 - Page Not Found</h1>

            <p>Sorry, this page doesn't seem to exist.</p>

            <a href='/'>Back to Home</a>
        </div>
    )
}

module.exports = NotFound;