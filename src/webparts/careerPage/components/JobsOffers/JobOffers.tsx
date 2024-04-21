import * as React from 'react';
import styles from './JobOffers.module.scss';
import EJ from './ExternalJobs/JobApi/JobApi';
import IO from './InternalJobs/InternalJobs';
import ES from './Sponsorship/Sponsorship'



const JobOffers: React.FC = () => {
    return (
        <div className={styles.Joboffers_holder}>
            <div className={styles.external_job_offers}>
                
                    <EJ/>
                
            </div>
            <div className={styles.Internal_job_offers}>
                    <IO />
            </div>
            <div className={styles.Enternship_job_offers}>
                    <ES />
            </div>
            <div className={styles.progress_path}></div>
        </div>
    );
}

export default JobOffers;