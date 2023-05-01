//CLASS Component Ornegi !

import React, {Component} from 'react';

class Ninjas extends Component {  
    render() {  
        const { propNinjas } = this.props;
        const ninjaList = propNinjas.map(myNinja => {
            return(
            <div className="ninjas"  key={myNinja.id} style={{color:'blue'}}>        
                <div>Ninja Name: {myNinja.name}</div>
                <div>Ninja Age: {myNinja.age}</div>
                <div>Ninja Belt: {myNinja.belt}</div>
            </div>
            )
        })
    return(
        <div className="myNinja-list" >
            {ninjaList}
        </div>
        )
    }
}

export default Ninjas;