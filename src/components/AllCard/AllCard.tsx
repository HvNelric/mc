import React from 'react';
import './AllCard.scss';

export interface AllCardProps {
    campaignNumber?: number;
    url?: string;
}

const AllCard: React.FC<AllCardProps> = ({campaignNumber = 0, url = "https://www.google.fr"}) => {
  return (
    <div className='allcard-container'>
        <div className="allcard-title">Voir toutes les campagnes terminés</div>
        <div className="campaign">{campaignNumber > 1 ? `${campaignNumber} campagnes supplémentaire` : `${campaignNumber} campagne supplémentaire`}</div>
    </div>
  )
}

export default AllCard