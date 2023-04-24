
import './userlist.css'

const UserList = ({ userList, setUserList }) => {
    const onDelete = (userid) => {
        const result = userList.filter((user) =>
            user.id !== userid

        )

        setUserList(result)
    }
    return (
        <section className='userlist'>

        <div className='container'>
           
                {
                    userList.map((user, id) => (
                        <div className='even-column' key={id}>
                            <div>
                            <h3>{user?.name}</h3>
                            </div>
                            <div>
                            <button onClick={() => onDelete(user.id)}>Delete</button>

                            </div>
                        </div>

)


)
}
            
        </div>
</section>
    )
}

export default UserList