import React, { Component } from 'react';

import './Spider.css';
import scared from '../img/Scared_witch.gif'


export default class BonneAnimation extends Component {
    render() {
        return (
            <div>
                {/* <svg width="90%" height="auto" viewBox="0 0 800 500"
                    >
                    <defs>
                        <path d="M -100,100 Q 250,550 850,100" id="profil" />
                    </defs>
                    <image width="100" height="50" xlinkHref="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" id='plongeur'>
                        <animateMotion begin="0s" dur="20s" repeatCount="indefinite">
                            <mpath xlinkHref="#profil" />
                        </animateMotion>
                    </image>
                </svg > */}
                <svg width="1000" height="350">
                    <rect id="blue-rectangle" width="50" height="50" x="25" y="200" fill="orange"></rect>

                    <animate
                        xlinkHref="#blue-rectangle"
                        attributeName="x"
                        from="50"
                        to="425"
                        dur="5s"
                        begin="0s"
                        repeatCount="indefinite"
                        fill="freeze"
                        id="rect-anim" />

                </svg>
            </div >

        );
    }
}

