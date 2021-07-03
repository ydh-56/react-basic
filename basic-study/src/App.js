import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UsersList from './User_list';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState  ([
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
]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //setUsers([...users, user]);
    setUsers(users.concat(user));
    // push 업데이트 되지 않음 사용 x
    setInputs({
      username:'',
      email:'',
    });
    //console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UsersList users={users}  />
    </>
  );
}

export default App;
