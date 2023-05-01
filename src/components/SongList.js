
import React, {useState, Fragment} from 'react'
//import uuid from 'uuid/v1'
import { v1 as uuidv1 } from 'uuid';

import AddSongForm from './AddSongForm';

const SongList = () => {

    const[studentList, setStudentList] = useState(
        [
            {name:'Ali', surname:'KARA', age:'23', id:1},
            {name:'Veli', surname:'KARA', age:'33', id:2},
            {name:'Ayşe', surname:'KARA', age:'45', id:3}
        ]
    )

    const addStudent = ()  => {
        var newObject = { name: document.getElementById("name").value
            ,surname:document.getElementById("surname").value
            , age:document.getElementById("age").value
            , id:uuidv1()};
            
            if(newObject.name.toString().trim()==="" || newObject.surname.toString().trim()==="" || newObject.age.toString().trim()==="" ){
                alert("Please fill the fields name/surname/age !")
                return ;
            }

            setStudentList([...studentList,newObject])
    }

const[songs, setSongs] = useState([
    {title:"benzemez kimse sana", id:1},
    {title:"geçmiyor günler", id:2},
    {title:"ada sahilleri", id:3}
])

const addSong = (newTitle) => {
    //var newVal = document.getElementById('mySongTxt').value;
    setSongs([...songs, {title:newTitle, id:uuidv1()} ]);
}

    return (  
        <Fragment>
            <h2>Student List</h2>
            <button onClick={addStudent}>Yeni Öğrenci Ekle</button>
            <div><input type="text" id="name" required minLength={5} maxLength={50}></input></div>
            <div><input type="text" id="surname" required minLength={5} maxLength={50}></input></div>
            <div><input type="text" id="age" required minLength={5} maxLength={50}></input></div>            
            <table>
                <thead>
                    <tr>
                        <th>{'isim'}</th>
                        <th>{'soyisim'}</th>
                        <th>{'yaş'}</th>
                    </tr>
                </thead>
                <tbody>
                {
                    studentList.map(student => {
                        return (                            
                            <tr key={student.id}>
                                <th>{student.name}</th>
                                <th>{student.surname}</th>
                                <th>{student.age}</th>
                            </tr>
                        )
                    })
                }                    
                </tbody>
            </table>

            <h2>Song List</h2>
                <AddSongForm propAddSong={addSong}></AddSongForm>
            <ul>{
                songs.map(song => {
                    return(<li key={song.id}> {song.title} </li>)
                })
            }</ul>

        </Fragment>
    );
}
 
export default SongList;
