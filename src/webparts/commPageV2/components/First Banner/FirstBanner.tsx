import * as React from 'react';
import styles from './FirstBanner.module.scss';


const FirstBanner: React.FC = () => {
    return (
        <div className={styles.FirstBanner_container}>
            <div className={styles.FB_background}>
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
                        <img src="/sites/CnexiaForEveryone/Assets/CommBanner.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirstBanner;
