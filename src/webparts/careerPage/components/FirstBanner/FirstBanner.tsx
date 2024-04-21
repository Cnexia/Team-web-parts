import * as React from 'react';
//import FBsvg from '../../assets/images/FirstBanner.svg'
import styles from './FirstBanner.module.scss'; // Import CSS module styles

const FirstBanner: React.FC = () => {
    return (
        <div className={styles.FirstBanner}>
            <div className={styles.FB_left}>
                <div className={styles.FBL_title}>
                    <p>
                        For a promising <br /> <span style={{ color: '#00966C' }}>future</span>
                    </p>
                </div>
                <div className={styles.FBL_content}>
                    <p>
                        
                        Chez Cnexia, vous êtes un pilier essentiel de notre succès collectif. Nous investissons dans votre plan de carrière en vous offrant des opportunités de formation et de développement, ainsi que des défis professionnels stimulants. <br />

                        Ensemble, nous construisons un avenir où vos talents sont valorisés, vos aspirations sont encouragées, et votre avenir est indéniablement prometteur.

                    </p>
                </div>
            </div>
            <div className={styles.FB_right}>
                
            <svg width="526" height="525" viewBox="0 0 526 525" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="350" width="175" height="175" rx="87.5" fill="#00AB84"/>
                <rect y="350" width="175" height="175" rx="87.5" fill="#00AB84"/>
                <rect x="176" y="175" width="175" height="175" rx="87.5" fill="#00AB84"/>
                <path d="M175 0H350V175C253.35 175 175 96.6498 175 0Z" fill="#FEE45E"/>
                <path d="M175 175L175.152 350L0.15168 350.152C0.0679441 253.502 78.3502 175.084 175 175Z" fill="#FEE45E"/>
                <path d="M350 175H525V350C428.35 350 350 271.65 350 175Z" fill="#002920"/>
                <path d="M524.922 524.078L349.922 523.921L350.079 348.921C446.729 349.008 525.009 427.429 524.922 524.078Z" fill="#002920"/>
                <rect width="175" height="175" fill="#002920"/>
                <path d="M351 524L175 349V524H351Z" fill="#FFC46B"/>
            </svg>
            
            </div>
        </div>
    );
}

export default FirstBanner;