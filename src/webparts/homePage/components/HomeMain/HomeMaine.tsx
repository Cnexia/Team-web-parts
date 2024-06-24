import * as React from 'react';
import Styles from './HomeMaine.module.scss';
import InternalJobs from './InternalJobs/InternalJobs';

const HomeMaine: React.FC = () => {
  

  return (
    <div className={Styles.HomeMaine}>
        <div className={Styles.cards_holder}>
            <div className={Styles.N1_holder}>

            </div>
            <div className={Styles.N2_holder}>
                
            </div>
            <div className={Styles.N3_holder}>
                
            </div>
            <div className={Styles.N4_holder}>
                
            </div>
            <div className={Styles.N5_holder}>
                
            </div>
            <div className={Styles.N6_holder}>
                
            </div>
            <div className={Styles.N7_holder}>
                <InternalJobs/>
            </div>
            <div className={Styles.N8_holder}>
                
            </div>
        </div>
    </div>
  );
};

export default HomeMaine;
