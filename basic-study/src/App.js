import React, {useRef} from 'react';
import UsersList from './User_list';

function App() {
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
  const nextId = useRef(4);
  const onCreate = () => {
    //console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <UsersList users={users}  />
  );
}

export default App;
