import React from 'react';

import candy from '../img/candies/001-candy.svg';
import mauvais from '../img/mauvais.gif'

class ActionBonne extends React.Component {

    render() {
        const showAction = this.props.checkReponse;
        if (showAction === undefined) {
            return (
                <div></div>
            )
        } else if (showAction) {
            return (
                <div>
                    <img src={candy} alt='candy'height='300px' width='200px' />
                </div>
            )
        }
        else {
            return (
                <div>
                    
                    <img src={mauvais} alt='mauvais reponse'  />
                </div>
            )
        }


}
}

export default ActionBonne;