import React, { Component } from 'react';

class AddNinja extends Component {

    state = {
        name:null,
        age:null,
        belt:null
    }
    
    handleBtnClick = (e) => {
      //alert(e.target.name);
    }
    handleChange = (e) => {
        //alert("target.id:" + e.target.id + " , target.value:"+e.target.value);
        this.setState({ 
            [e.target.id]: e.target.value  //e.target.id : name/age/belt
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();//prefent refresh
        this.props.propAddNinja(this.state);
    }

    componentDidCatch(error, errorInfo) {
     alert("ERROR-1 : " + error.message)   
  }

render(){
    try { 
    return (
        <div>
            <form onSubmit={this.handleSubmit}>  {/*bu olmazsa preventDefault calismaz*/ }
                <label htmlFor="name"> Name :</label>
                <input type="text" id="name" onChange={ this.handleChange}/>
                <br/>
                <label htmlFor="name"> Age :</label>
                <input type="text" id="age" onChange={ this.handleChange}/>
                <br/>
                <label htmlFor="name"> Belt :</label>
                <input type="text" id="belt" onChange={ this.handleChange}/>
                <br/>
                <button onClick={this.handleBtnClick}>SUBMIT</button>
            </form>
        </div>
    )
     }
    catch(error) {
     alert("ERROR-2 : " + error.message)   
    }
}
}

export default AddNinja;