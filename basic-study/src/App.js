import React, {useRef, useState, useMemo} from 'react';
import CreateUser from './CreateUser';
import UsersList from './User_list';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중')
  return users.filter(user => user.active).length;
}
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
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  }

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UsersList users={users} onRemove={onRemove} onToggle={onToggle} />
    <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
