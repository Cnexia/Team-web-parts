import * as React from 'react';
import styles from './JobOffers.module.scss';
import EJ from './ExternalJobs/JobApi/JobApi';
import IO from './InternalJobs/InternalJobs';




const JobOffers: React.FC = () => {
    return (
        <div className={styles.Joboffers_holder}>
            <div className={styles.external_job_offers}>
                
                    <EJ/>
                
            </div>
            <div className={styles.Internal_job_offers}>
                    <IO />
            </div>
            <div className={styles.next_step}>
                
            </div>
            <div className={styles.progress_path}>
                <div className={styles.PP_container}>
                    <div className={styles.PP_title}>
                        <p>
                            Career Path
                        </p>
                    </div>
                    <div className={styles.PP_content}>
                        <p>
                        Découvrez les opportunités de carrière chez Cnexia et naviguez dans votre parcours professionnel avec clarté et objectif. Découvrez les différents chemins de croissance et d'avancement au sein de notre organisation, que vous cherchiez à vous spécialiser dans un domaine spécifique, à gravir l'échelle de leadership, ou à explorer des rôles interdisciplinaires.
                        </p>
                    </div>
                    <div className={styles.PP_btn}>

                            <div>
                                    <p>voire plus</p>
                            </div>
                            <div>
                                <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3596 18.4937C13.6811 18.8179 14.1171 19 14.5717 19C15.0262 19 15.4622 18.8179 15.7837 18.4937L23.4981 10.7121C23.8195 10.3879 24 9.94809 24 9.48956C24 9.03103 23.8195 8.59127 23.4981 8.26699L15.7837 0.485418C15.4603 0.170424 15.0273 -0.00387389 14.5778 6.60428e-05C14.1283 0.00400597 13.6984 0.185868 13.3805 0.506483C13.0627 0.827097 12.8824 1.26081 12.8785 1.71421C12.8746 2.16761 13.0474 2.60442 13.3596 2.93056L18.0003 7.76032H1.71431C1.25965 7.76032 0.823606 7.94251 0.50211 8.2668C0.180615 8.5911 0 9.03094 0 9.48956C0 9.94818 0.180615 10.388 0.50211 10.7123C0.823606 11.0366 1.25965 11.2188 1.71431 11.2188H18.0003L13.3596 16.0486C13.0382 16.3728 12.8577 16.8126 12.8577 17.2711C12.8577 17.7297 13.0382 18.1694 13.3596 18.4937Z" fill="#044123"/>
                                </svg>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobOffers;