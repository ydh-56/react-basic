import React from 'react';

function User({ user, onRemove }) {
    //const { username, email, id } = user;
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UsersList({users, onRemove}) {
    

    return (
        <div>
           {
               users.map(
                   (user, index) => (<User user={user} key={user.id} onRemove={onRemove} />)
               )
           }
        </div>
    );
}
export default UsersList;