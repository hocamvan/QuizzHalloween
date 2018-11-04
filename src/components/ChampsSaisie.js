import React, { Component } from 'react';

// import BlocQuestion from './BlocQuestion.json';

import './ChampsSaisie.css'


class ChampsSaisie extends Component {
    state = {
        resultat: "",
        inputReponse: "",
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleOnSubmit = (e) => {
        const verifierReponse = this.state.inputReponse.toLowerCase().includes(this.props.bonneReponse.toLowerCase());
        let result = verifierReponse ? "Bonne réponse" : "Mauvaise réponse";
        this.setState({
            resultat: result
        });
        if (verifierReponse) {
            this.props.actionBonneReponse();
        } else {
            this.props.actionMauvaiseReponse();
        }
        e.preventDefault();
    }
    componentDidUpdate(prevProps) {
        if (this.props.bonneReponse !== prevProps.bonneReponse) {
            this.setState({
                resultat: "",
                inputReponse: ""
            });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        className="style"
                        onChange={this.handleOnChange}
                        value={this.state.inputReponse}
                        // value ={this.props.inputReponse}
                        type="text" name="inputReponse"></input>
                </form>

                <h3 className="testReponse">{this.state.resultat}</h3>
                {/* <input className="style" value={BlocQuestion.reponse}type="text" name="La reponse"></input> */}
            </div>
        )

    }
}

export default ChampsSaisie;