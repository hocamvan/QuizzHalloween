import React, { Component } from 'react';
import shuffle from 'lodash.shuffle';
// import Modal from 'react-modal'

import BlocQuestion from './BlocQuestion.json';
import NextQuestion from './NextQuestion';
import BoutonLangue from './BoutonLangue';
import ChampsSaisie from './ChampsSaisie';
import Modal from './Modal';
import ActionBonne from './ActionBonne';

import './Devinettes.css';

const aleatoire = shuffle(BlocQuestion);
class Devinettes extends Component {
    state = {
        index: 0,
        Quiz: aleatoire,
        showModal: false,
        checkReponse: undefined,
   
    }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    handleNextQuestion = () => {
        this.setState(prevState => ({
            index: prevState.index + 1,
            checkReponse: undefined,
        }))
    }
    // autreQuestion = e => {
    //     this.setState(aleatoire[this.state.index]);
    //     this.setState(prevState => ({index: prevState.index +1}));
    // }
    handleShowReponse = () => {
        this.setState({
            showModal: true
        })
    }

    actionBonneReponse = () => {
        this.setState({
            checkReponse: true
        })
    };

    actionMauvaiseReponse = () => {
        this.setState({
            checkReponse: false
        })
    };

    render() {
        const { index, Quiz, showModal,checkReponse} = this.state;

        return (
            <div>
                <h2 className="question"> {Quiz[index].question}</h2>
                <ChampsSaisie bonneReponse={Quiz[index].key}  actionBonneReponse={this.actionBonneReponse} actionMauvaiseReponse={this.actionMauvaiseReponse} />
                <br/>
                <NextQuestion next={this.handleNextQuestion} />
                <br/>
                <BoutonLangue reponse={this.handleShowReponse}  />
                <Modal showModal={showModal} closeModal={this.closeModal} reponse={Quiz[index].reponse} />
                <ActionBonne checkReponse={checkReponse} />
            </div>


        );
    }
}
export default Devinettes;