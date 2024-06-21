import * as React from 'react';
import styles from './CareerPage.module.scss';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import  { useEffect, useRef } from 'react';


import FirstBanner from './First Banner/FirstBanner';

import Footer from './NewFooter/Footer';
import Navbar from './Header/navbar';
import Team from './Team/Team';

import JobOffers from './JobsOffers/JobOffers';

const CommPage: React.FC<{ context: WebPartContext }> = ({ context }) => {
    const [showSavoirPlus, setShowSavoirPlus] = React.useState(false);
    const savoirPlusRef = useRef<HTMLDivElement>(null);

    const handleShowSavoirPlus = () => {
        setShowSavoirPlus(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (savoirPlusRef.current && !savoirPlusRef.current.contains(event.target as Node)) {
            setShowSavoirPlus(false);
        }
    };

    useEffect(() => {
        if (showSavoirPlus) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSavoirPlus]);
    return (
        <div className={styles.CommPage}>
            <Navbar />
            
            <FirstBanner onShowSavoirPlus={handleShowSavoirPlus} />
            <div
                ref={savoirPlusRef}
                className={`${styles.savoirPlusContainer} ${showSavoirPlus ? styles.savoirPlusEnterActive : styles.savoirPlusExitActive}`}
            >
                <Team />
            </div>
            <JobOffers/>
            
            
            <Footer />
        </div>
    );
};

export default CommPage;
