import * as React from 'react';
import styles from './HomePageFinale.module.scss';
import { WebPartContext } from '@microsoft/sp-webpart-base';



import Footer from './Footer/footer';
import Navbar from './Header/navbar';
import SecondPart from './SecondPart/SecondPart';


const CommPage: React.FC<{ context: WebPartContext }> = ({ context }) => {
    return (
        <div className={styles.HomePage}>
            <Navbar/>
            <SecondPart context={context}/>
            <Footer />
        </div>
    );
};

export default CommPage;
