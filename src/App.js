import React, {Component} from 'react';
//import Students from './Students';
//import Ninjas from './Ninjas';
import Ninjas1 from './components/Ninjas1';
import AddNinja from './components/AddNinja';
import SongList from './components/SongList';
import UserListComponent from './components/UserListComponent';
import AlertComponent from './components/AlertComponent';
import BootstrapOrnekler from './components/BootstrapOrnekler';

class App extends Component {  
state = { 
  ninjalar : [
    {name:"Ali", age:25, belt:"white", id:1},
    {name:"FATMA", age:41, belt:"white", id:2},
    {name:"MELEK", age:17, belt:"white", id:3}
    ]
  }

  handleCheck(ninjaId) {
    return this.state.ninjalar.some(item => item.id === ninjaId);
  }

  addNinja = (prmNinja) => {
    console.log(prmNinja);

    prmNinja.id = Math.floor(Math.random()*1000000);
    let newNinjas = [...this.state.ninjalar, prmNinja]; // add new element

    if(this.handleCheck(prmNinja.id)) {
      alert("RECORD ALREADY EXIST!\nPLEASE TRY A NEW RECORD.");
      return;
    }
    
    this.setState({        
      ninjalar:newNinjas //ninjalar : this.ninjalar.push(prmNinja)
    })
  }

  deleteNinja = (ninjaId) => {
    console.log(ninjaId);
    let ninjas = this.state.ninjalar.filter((ninja) => {
      return ninja.id !== ninjaId // return true/false
    });

    this.setState({
      ninjalar: ninjas
    })
  }
  
  componentDidMount () {  
    console.log('component is MOUNTED !')
  }
  componentDidUpdat (prevProps,prevState) {
    console.log('component is UPDATED !');
    console.log(prevProps,prevState);
  }
  render() {
  return (        
    <div className="App">            
      <h1>HOŞGELDİNİZ CANLAR !</h1>
      {/* <AddNinja propAddNinja={this.addNinja}/>  */}
      {/*<Ninjas1  propDeleteNinja={this.deleteNinja} propNinjas1 ={this.state.ninjalar} />*/}
      {/* <Students name="Ali" age="300" belt="white"/> */}
      {/* <Ninjas  propNinjas ={this.state.ninjalar} /> */}      
      {/* <SongList></SongList> */}
      <UserListComponent></UserListComponent>
      {/* <BootstrapOrnekler></BootstrapOrnekler> */}
    </div>
  );
}
}

export default App;
