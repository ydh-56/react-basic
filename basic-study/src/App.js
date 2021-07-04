import React, {useRef, useState, useMemo, useCallback} from 'react';
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
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }, [inputs]);
  // onChange 함수는 inputs가 바뀔때만 새로 만들어지게 되고 아니면 재사용
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
  const onCreate =  useCallback(() => {
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
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);
  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
      ? { ...user, active: !user.active }
      : user
    ));
  }, [users])

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
