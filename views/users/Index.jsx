const React = require('react')
const Default = require('../layout/Default.jsx')


function Index (props) {
    return (
        <Default>
            <div>
                <h1>Users Index Page</h1>
                <a href="/users/new">Create a new User Profile Here</a>
                <ul>
                    {
                        props.users.map((user) => {
                            return (
                                <li key={user._id}>
                                    <a href={`/users/${user._id}`}>{user.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Default>
   )
}

module.exports = Index
