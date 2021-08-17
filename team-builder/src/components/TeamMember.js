import React from 'react';

export default function TeamMember(props) {
    const { member } = props;
    if (!member) {
        return <h3>Working fetching the data</h3>
    }

    return (
        <div className='member container'>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </div>
    );
}