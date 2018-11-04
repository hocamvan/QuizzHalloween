import React, {
    Component
} from 'react';
import shuffle from 'lodash.shuffle';

import BlocQuestion from './BlocQuestion.json';

import './Questions.css'

// console.log(Devinettes);
const aleatoire = shuffle(BlocQuestion);
// console.log(shuffle(Devinettes));
console.log(aleatoire[0]);


class Questions extends Component {
    state = {
        index: 0
    };

    // lance la fonction autreQuestion AVANT de l'afficher
    componentDidMount() {
        this.autreQuestion();
    }

    autreQuestion = e => {
        this.setState(aleatoire[this.state.index]);
        this.setState(prevState => ({index: prevState.index +1}));
    }

    render() {
        // console.log(Devinettes);

        return ( 
            <div className = "Questions">
                <h2 className= "QuestionsH2">
                    {this.state.question}
                </h2>
                <button onClick = {
                e => this.autreQuestion(e)
            } > Prochaine question !! </button>

            </div>
        );
    }
}

export default Questions;