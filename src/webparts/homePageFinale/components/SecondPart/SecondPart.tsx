import * as React from 'react';
import styles from './SecondPart.module.scss';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { useState, useEffect } from 'react';
import { sp } from '@pnp/sp'; // Import SharePoint PnP library


import InternalJobs from './InternalJobs/InternalJobs';

interface ISecondPartProps {
    context: WebPartContext;
    
}

const SecondPart: React.FC<ISecondPartProps> = (props:ISecondPartProps) => {

    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);


    //-------------------------------> Importing the video from the Document Library in sharepoint <----------------
    React.useEffect(() => {
        if (isPlaying && videoRef.current) {
            videoRef.current.play();
        } else if (!isPlaying && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    const [videos, setVideos] = React.useState<string[]>([]);

    React.useEffect(() => {
        fetchVideosFromSharePoint();
    }, []);

    const fetchVideosFromSharePoint = async () => {
        try {
            const response = await fetch(
                `${props.context.pageContext.web.absoluteUrl}/_api/web/lists/getByTitle('CommVideos')/items?$select=FileRef`,
                {
                    headers: {
                        Accept: 'application/json;odata=nometadata',
                    },
                }
            );
            const data = await response.json();
            const videoUrls = data.value.map((item: any) => item.FileRef);
            setVideos(videoUrls);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

        // -------------------------> Fetching Images from a document libray <---------------------
        const [currentIndex, setCurrentIndex] = useState<number>(0); // Add type annotation for currentIndex
        const [images, setImages] = useState<string[]>([]);
        const goToPrevSlide = () => {
            const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        };

        const goToNextSlide = () => {
            const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };
        
        useEffect(() => {
            
            const fetchImages = async () => {
                try {
                    const response = await sp.web.lists.getByTitle("MediaTek").items.select('FileRef').get();
                    const imageUrls = response.map(item => item.FileRef);
                    setImages(imageUrls);
                } catch (error) {
                    console.error('Error fetching images:', error);
                }
            };

            fetchImages();
        }, []);
    
    return (
        <section className={styles.prt2}>
            <div className={styles.prt2container}>
                <div className={`${styles.Birthdays} ${styles.card}`}>
  
                </div>
                <div className={`${styles['cnexia-video']} ${styles.card}`}>
                    <div className={styles.CardHeader}>
                        <div className={styles.cardIcon}>
                        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2173 10.492C23.2034 11.6705 23.1688 14.5571 21.1551 15.6877L4.92907 24.7984C2.91538 25.9291 0.432848 24.4559 0.460512 22.1466L0.683425 3.53913C0.711089 1.22989 3.2282 -0.18343 5.21422 0.995145L21.2173 10.492Z" fill="white"/>
                        </svg>
   

                        </div>
                        <div className={styles.CardTitle}>
                            <p>Cnexia videos</p>
                        </div>
                    </div>
                    <div className={styles.videoContainer}>
                    {videos.map((videoUrl, index) => (
                         <div className={styles.video_holder}>
                        
                            <video ref={videoRef}  src={videoUrl} controls style={{width:'100%', height:'100%'}} onClick={handleTogglePlay} />
                         </div>
                          ))}
                           {!isPlaying && (
                        <div className={styles.PlayBtn}>
                                <div className={styles.BTN_CIRCLE}></div>
                                <div className={styles.PlayIcon}>
                                    <button className={styles.Play} onClick={handleTogglePlay}>
                                        
                                        <svg width="49" height="55" viewBox="0 0 49 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.3047 25.8401C49.2907 27.0187 49.2561 29.9052 47.2424 31.0359L5.42737 54.5145C3.41368 55.6452 0.93115 54.172 0.958814 51.8627L1.53327 3.91052C1.56093 1.60128 4.07804 0.187951 6.06407 1.36653L47.3047 25.8401Z" fill="#58C1A3"/>
                                        </svg>




                                    </button>
                                </div>
                            </div>
                            )}
                    </div>
                    <div className={styles.videobuttom}>
                        <div className={styles.videoData}>
                            <p>
                                Video :
                            </p><br />
                            <span style={{fontWeight:'400', color:'#FFF'}}></span>
                            
                        </div>
                        <div className={styles.videoBtn}>
                            <div className={styles.btnLeft}>

                            <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.23096 1.01575L1.59149 10.5079L9.23096 20" stroke="#00966C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </div>
                            <div className={styles.btnright}>

                                <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 10.5L1 20" stroke="#00966C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>


                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.joboffers} ${styles.card}`}>
                    <InternalJobs/>
                </div>
                <div className={`${styles.guallerie} ${styles.card}`}>
                <div className={styles.ImageContainer}>
                    <div className={styles.image_holder}>
                        <img src={images[currentIndex]} alt="Slide" />
                    </div>
                    <div className={styles.Navigation_btn}>
                        <button className={styles.prevBtn} onClick={goToPrevSlide}>
                            
                            <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.74178 20.4324L0.309099 14.1945C-0.103029 13.7948 -0.10303 13.2051 0.309098 12.8055L12.7412 0.749781C13.517 -0.00247461 15 0.453514 15 1.44429L15 12.1741L6.74178 20.4324Z" fill="white"/>
                            <path opacity="0.5" d="M15 14.8258L15 25.5557C15 26.5465 13.517 27.0024 12.7412 26.2502L8.08798 21.7378L15 14.8258Z" fill="white"/>
                            </svg>

                        </button>
                        <button className={styles.nextBtn} onClick={goToNextSlide}>
                            <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25822 6.56763L14.6909 12.8055C15.103 13.2052 15.103 13.7949 14.6909 14.1945L2.25876 26.2502C1.48301 27.0025 4.33083e-08 26.5465 0 25.5557V14.8259L8.25822 6.56763Z" fill="white"/>
                            <path opacity="0.5" d="M4.47035e-07 12.1742L0 1.44432C-4.33083e-08 0.45354 1.48301 -0.00244924 2.25875 0.749806L6.91202 5.26216L4.47035e-07 12.1742Z" fill="white"/>
                            </svg>

                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default SecondPart;
