import React, {useRef, useReducer, useMemo, useCallback, createContext} from 'react';
import CreateUser from './CreateUser';
import UsersList from './User_list';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중')
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
        id:1,
        username: 'yang',
        email: 'yang@naver.com',
        active: true
    },
    {
        id:2,
        username: 'da',
        email: 'da@naver.com',
        active: false
    },
    {
        id:3,
        username: 'hyun',
        email: 'hyun@naver.com',
        active: false
    }
]
}

function reducer(state, action) {
  switch (action.type) {
      case 'CREATE_USER':
        return {
          inputs: initialState.inputs,
          users: state.users.concat(action.user)
        }
      case 'TOGGLE_USER':
        return {
          ...state,
          users: state.users.map(user => 
              user.id === action.id
                ? {...user, active: !user.active}
                : user
            )
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        }
      default:
        return state;
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}>
    <CreateUser   />
    <UsersList users={users}  />
    <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
