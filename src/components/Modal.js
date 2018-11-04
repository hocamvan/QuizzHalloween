import React from 'react';
import Modal from 'react-modal';

import langueChat from '../img/langueChat.gif'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class CallModal extends React.Component {
        // state = {
        //     modalIsOpen: this.props.showModal
           
        // };

    afterOpenModal=()=> {
        this.subtitle.style.color = '#f00';
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.showModal}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.reponse}</h2>
                    <img src={langueChat} alt='langueChat' />
                    <button onClick={this.props.closeModal}>close</button>
                   
                </Modal>

            </div>
        );
    }
}

export default CallModal;