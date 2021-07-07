import React from 'react';

const User = React.memo(function user({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}
            >{username}</b>&nbsp; <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
} );

function UsersList({users, onRemove, onToggle}) {
    

    return (
        <div>
           {
               users.map(
                   (user) => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
               )
           }
        </div>
    );
}
export default React.memo(UsersList, (prevProps, nextProps) => nextProps.users === prevProps.users);