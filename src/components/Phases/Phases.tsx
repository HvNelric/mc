import React from 'react';
import './Phases.scss'

export interface PhasesProps {
    phase?: "collecte" | "reponse" | "resultat";
}

const Phases: React.FC<PhasesProps> = ({phase = "collecte"}) => {

    let phaseArr = [
        {
            label: 'collecte',
            text: 'Collecte des questions'
        },
        {
            label: 'reponse',
            text: 'Réponses aux questions'
        },
        {
            label: 'resultat',
            text: 'Résultats'
        }
    ]

    return (
        <div className='phases-container'>
            {
                phaseArr.map(item => (
                    <div className={`phase ${item.label === phase ? 'active' : ''}`}>
                        <div className="line"></div>
                        <div className="phase-text">{item.text}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Phases;