import React, {Component} from 'react';

class Students extends Component {  
    render() {  
        const {name,age,belt} = this.props;
    return(
        <div className="Students" style={{color: 'brown'}} >
            <div>Student Name: {name}</div>
            <div>Student Age: {age}</div>
            <div>Student Belt: {belt}</div>
        </div>
        )
    }
}

export default Students;