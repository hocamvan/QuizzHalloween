import React, { Component } from 'react';

class BoutonLangue extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <button onClick={()=>this.props.reponse()}> Je donne ma langue au chat </button>
            </div>
        )

    }
}

export default BoutonLangue;