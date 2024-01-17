const React = require('react')
const Default = require('../layout/Default.jsx')

function Edit (props) {
    const { name, _id, email, password } = props.user
    return(
        <Default>
            <div>
                <h1>{name} Edit Page</h1>
                <a href='/users'>Go back to Index Page</a>
                <form action={`/users/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} /><br/>
                    Email: <input type="text" name="color" defaultValue={email}/><br/>
                    Password: <input type="text" name="password" defaultValue={password} /><br/>
                    <input type="submit" value="Update User" />
                </form>
            </div>
        </Default>
    )
}

module.exports = Edit
