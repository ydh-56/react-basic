import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UsersList() {
    const users = [
        {
            id:1,
            username: 'yang',
            email: 'yang@naver.com'
        },
        {
            id:2,
            username: 'da',
            email: 'da@naver.com'
        },
        {
            id:1,
            username: 'hyun',
            email: 'hyun@naver.com'
        }
    ];

    return (
        <div>
           {
               users.map(
                   (user, index) => (<User user={user} key={user.id} />)
               )
           }
        </div>
    );
}
export default UsersList;