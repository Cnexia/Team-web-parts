import * as React from 'react';
import styles from './ThirdPart.module.scss';

const LInkdinPart: React.FC = () => {
    return (
        <section className={styles.learning_quick_links}>
            <div className={styles.learning}>
                <div className={styles.banner}>
                    <div className={styles.logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                            {/* Contenu du SVG */}
                        </svg>
                    </div>
                    <div className={styles.title}>
                        <p>Learning</p>
                    </div>
                </div>
                <div className={styles.video_container}>
                    <div className={styles.video_holder}>
                        <video id="myVideo" controls>
                            {/* Sources vidéo */}
                        </video>
                        <img className={styles.video_thumbnail} src="https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/a5e24266946b99e14823bb12c99e7c4183092c8b1-1705944847654.png" alt="Video Thumbnail" />
                        <div className={styles.Play_cercle} >
                            <svg className={styles.cercle_svg} xmlns="http://www.w3.org/2000/svg" width="48" height="55" viewBox="0 0 48 55" fill="none">
                                {/* Contenu du cercle SVG */}
                            </svg>
                        </div>
                    </div>
                    <div className={`${styles.play} ${styles.button}`}>
                        <div className={styles.circle}></div>
                        <div className={styles.play_logo}></div>
                    </div>
                </div>
                <div className={styles.card_footer}></div>
            </div>

            <div className={styles.quick_links}>
                <div className={styles.header}>
                    <div className={styles.logo_holder}>
                        <div className={styles.logo_q}>
                            <svg className={styles.svg_link_logo} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                {/* Contenu du SVG du logo */}
                            </svg>
                        </div>
                    </div>
                    <div className={`${styles.title} ${styles.quick_links}`}>
                        <p>Quick links</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.cards}>
                    {/* Contenu des cartes */}
                </div>
            </div>
        </section>
    );
}



export default LInkdinPart;
