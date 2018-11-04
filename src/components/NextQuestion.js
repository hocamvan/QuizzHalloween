import React, { Component } from 'react';

class NextQuestion extends Component {
    render(){
        return(
            <div className>
                <button onClick={() =>this.props.next()}> Next Question </button>
            </div>
        )
    }
}
export default NextQuestion;