import React, {useState} from 'react';

const UserListComponent = () => {

const [user, setUser] = useState("ALİ");

const [userList, setUserList] = useState([
    {name: "Ali", surname: "KARA", age: "45", id:1},
    {name: "AYŞE", surname: "KARA", age: "45", id:2},
    {name: "KEMAL", surname: "KARA", age: "45", id:3}
]);

const handleDelete = (e) => {
    
    let tempList = [...userList];    
    let index = tempList.findIndex(item => item.id === Number(e.target.id));

    if(index > -1) {
        tempList.splice(index, 1);
        setUserList(tempList);
    }
}

    return (
        <div>
            <h2>My Test List</h2>
            <ul>
                {
                    userList.map(user => 
                    { 
                        return <li key={user.id}>{user.name}  - {user.surname} - {user.age} -  {<button id={user.id} onClick={handleDelete}>SİL</button>}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default UserListComponent;