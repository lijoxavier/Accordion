import { Fragment, useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import './App.css'
import UserList from './components/UserList/UserList'
import Faq from './components/Faq/Faq'

const App = () => {
  const [userList, setUserList] = useState([])
  async function getUserList() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response)=>response.json())
    // .then((data)=>console.log(data))

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUserList(response?.data)
    }
    catch (error) {
      console.log(error);
    }
    
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((response)=>setUserList(response.data))

  }
  useEffect(() => {
    getUserList()
  }, [])
  // console.log(userList);
  return (

    <Fragment>
      <div className='App'>
        {/* <ul style={{listStyle:"none"}}>

          {
            userList.map((user) => (
              <li key={user?.id}>{user?.id} {user?.name}</li>
            )

            )

          }
        </ul> */}
        <UserList userList={userList}setUserList={setUserList}></UserList>
        <Faq userList={userList}></Faq>
      </div>

    </Fragment>
  )
}

export default App
