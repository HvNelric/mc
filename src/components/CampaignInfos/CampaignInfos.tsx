import React from 'react';
import './CampaignInfos.scss';
import Btn from '../Button/Btn';

export interface CampaignInfosProps {
    questionNumber: number;
    dateEnd: Date;
}

const CampaignInfos: React.FC<CampaignInfosProps> = ({questionNumber, dateEnd}) => {

    const today = new Date()
    const dateLeft = Math.round(Math.abs(dateEnd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    const date = dateEnd.toLocaleString('default', { day: "2-digit", month: 'long', year: "numeric" });

  return (
    <div className="campaign-infos-container">
        <div className="infos-question">
            <h3>{questionNumber} questions proposées</h3>
        </div>
        <div className="infos-date">
            <h3 className="date-left">{dateLeft} jours restants</h3>
            <div className="date-end"><i className='icon-time'></i>Fin le {date}</div>
        </div>
        <Btn
            label={"Voir les questions"}
            href={"https://www.google.fr"} 
        />
    </div>
  )
}

export default CampaignInfos