const React = require('react')
const Default = require('../layout/Default.jsx')

function New (props) {
    return(
        <Default>
            <div>
                <h1>New User Page</h1>
                <a href='/users'>Go back to Index Page</a>
                <form action="/users" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Email: <input type="text" name="color" /><br/>
                    Password: <input type="text" name="password" /><br/>
                    <input type="submit" value="Create User Profile" />
                </form>
            </div>
        </Default>
    )
}

module.exports = New
