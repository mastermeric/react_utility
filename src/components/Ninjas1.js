//FUNCTION Component Ornegi ! State erisimi yok !

import React from 'react';

const Ninjas1 = ({ propNinjas1, propDeleteNinja }) => {  //props parametre olarak gecilir
    //const { propNinjas1 } = props; //Buna gerek yok, ({propNinjas1}) daha pratik.

    const ninjaList = propNinjas1.map(myNinja => {
        if(myNinja.age>0)
        {
        return(
        <div className="ninjas"  key={myNinja.id} style={{color:'green'}}>        
            <div>Ninja ID: {myNinja.id}</div>
            <div>Ninja Name: {myNinja.name}</div>
            <div>Ninja Age: {myNinja.age}</div>
            <div>Ninja Belt: {myNinja.belt}</div>
            <button onClick={() => {propDeleteNinja(myNinja.id)}}>Delete</button>
        </div>
        )
      }
      else {
          return(<div></div>) ;
      }
    })
return(
    <div className="myNinja-list" >
        {ninjaList}
    </div>
    )
}

export default Ninjas1;