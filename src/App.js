import React from 'react';
import { useState,useEffect } from 'react';

import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

//  список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([])

  const [isLoading, setisLoading] = useState(true)

  const [searchValue, SetSearchValue] = useState('')



  React.useEffect(() => {

    fetch('https://reqres.in/api/users')

    .then(res => res.json())

    .then((json) => {

      setUsers(json.data)

    }).catch(err => {

      console.warn(err)

      alert('Ошибка сервера')

    }).finally (() => setisLoading(false))


  }, [])

  const onChangeValue = (e) => {
    SetSearchValue(e.target.value);
  }


  return (

    <div className="App">

      <Users items={users} isLoading={isLoading} searchValue={searchValue} onChangeValue={onChangeValue}/>

      {/* <Success /> */}

    </div>

  );
}

export default App;
