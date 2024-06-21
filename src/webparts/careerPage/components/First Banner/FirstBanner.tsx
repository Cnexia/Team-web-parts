import * as React from 'react';
import styles from './FirstBanner.module.scss';

interface FirstBannerProps {
    onShowSavoirPlus: () => void;
}

const FirstBanner: React.FC<FirstBannerProps> = ({ onShowSavoirPlus }) => {
    return (
        <div className={styles.FirstBanner_container}>
            <div className={styles.background}>
                <div className={styles.bg_left}>

                </div>
                <div className={styles.bg_right}>

                </div>
            </div>
            <div className={styles.second_layer}>

            </div>
            <div className={styles.content_layer}>
            <div className={styles.FB_content}>
                        <p>
                            
                        For promissing <br /><span style={{color:'#8EB1E3'}}> futur</span> 
                            
                        </p>
                    </div>
                    <div className={styles.FB_card}>
                        <div className={styles.card}>
                            <div className={styles.card_title}>
                                <p>Rencontrez notre équipe de recrutement aujourd'hui !</p>
                            </div>
                            <div className={styles.card_content}>
                                <p>Découvrez les talents qui animent notre département Recrutement. Notre équipe passionnée et innovante est là pour vous inspirer et favoriser les connexions. Explorez dès maintenant notre équipe exceptionnelle.</p>
                            </div>
                            <button className={styles.card_btn} onClick={onShowSavoirPlus}>
                                Découvrir plus
                            </button>
                        </div>
                    </div>
            </div>
            {/* <div className={styles.FB_background}>
                <div className={styles.shape_holder}>
                    <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2194_800)">
                    <path d="M0 0C56.8429 0 103 46.1571 103 103H0V0Z" fill="#03B586"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2194_800">
                    <rect width="103" height="103" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                </div>

                <div className={styles.FB_holder}>
                    <div className={styles.FB_content}>
                        <p>
                            
                            Unite,<span style={{color:'#044124'}}> Communicate,</span> <span style={{color:'#8EB1E3'}}>Succeed,</span>
                            
                        </p>
                    </div>
                    <div className={styles.FB_img}>
                        
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default FirstBanner;
