import React from 'react';
import { useState } from 'react';

import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';


function App() {

  const [users, setUsers] = useState([])

  const [invites, setInvites] = useState([])

  const [isLoading, setisLoading] = useState(true)

  const [success, steSuccess] = useState(false)

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

  const onClickInvite = (id) => {

    if (invites.includes(id)) {

      setInvites(prev => prev.filter(_id => _id !==  id) )

    } else {

      setInvites((prev) => [...prev, id])

    }
  }

  const onClickSendInvites = () => {
    steSuccess(true)
  }


  return (

    <div className="App">

      {success ? (
        <Success  count ={invites.length} /> 
      ) : (

        <Users
         items={users} 
         isLoading={isLoading} 
         searchValue={searchValue} 
         onChangeValue={onChangeValue}
         invites={invites}
         onClickInvite={onClickInvite}
         onClickSendInvites={onClickSendInvites}
         />

      )
    
    }



    </div>

  );
}

export default App;
