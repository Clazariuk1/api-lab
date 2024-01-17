const React = require('react')
const Default = require('../layout/Default.jsx')

function Show(props) {
    return(
        <Default>
            <div>
                <h1>{props.user.name}</h1>
                <a href='/users'>Go back to Index Page</a>
                <p>
                    The {props.fruit.name} is {props.fruit.color} and {props.fruit.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
                </p>
                <form action={`/users/${props.user._id}?_method=DELETE`} method="POST">
                    <input type="submit" value={`Delete this ${props.user.name}`} />
                </form>
                <div>
                    <a href={`/users/${props.user._id}/edit`}><button>{`Edit this ${props.user.name}`}</button></a>
                </div>
            </div>
        </Default>
    )
}

module.exports = Show
