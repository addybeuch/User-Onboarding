import React from 'react'

function User({details}) {
    if (!details) {
        return <h3>Fetching user details</h3>
    }
    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.email}</p>
            <p>Email: {details.email}</p>
        </div>
    )
}
export default User