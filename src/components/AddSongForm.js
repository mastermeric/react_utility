import React from 'react';

const AddSongForm = ({propAddSong = this.props.addSong}) => {

const submitSong = (e) => {
    e.preventDefault();    
    var tempVal = document.getElementById("mySongTxt").value;
    if(tempVal.trim() === "") {
        alert("Song Name is Empty !");
    }
    else {
        propAddSong(tempVal);
        document.getElementById("mySongTxt").value = "";
    }
}

return (
    <form>
        <label>Song Name:</label>
        <div><input type="text" id="mySongTxt" ></input></div>
        <button onClick={submitSong}>Yeni Şarkı Ekle</button>
    </form>
    );
};

export default AddSongForm;
