import * as React from 'react';

import './CareerPage.module.scss';

import FB from './FirstBanner/FirstBanner';
import JO from './JobsOffers/JobOffers';
import Process from './Process/Process'

const CareerPage: React.FC = () => {

    return(
        <div className="CareerPage">

            
                <FB />
                <JO />
                <Process/>
      
            
        </div>
    );
}



export  default CareerPage;
