import * as React from 'react';
import styles from './ContactUs.module.scss';
import ContactService from '../Contactez nous/services/ContactService';
import 'leaflet/dist/leaflet.css';
// import * as L from 'leaflet';



const ContactUs: React.FC = () => {
        
  const [newComment, setNewComment] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const contactService = new ContactService();
//   const mapContainerRef = React.createRef<HTMLDivElement>(); // Ref for the map container
  

  

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNewComment(event.target.value);
  };

  const handleSubmit = async () => {
      if (!newComment) return;

      try {
          const currentUserEmail = await contactService.getCurrentUserEmail();
          await contactService.postComment(newComment, currentUserEmail);
          setNewComment('');
          alert('Message submitted successfully!'); // Display system message
      } catch (error) {
          console.error('Error submitting comment:', error);
      }
  };

  React.useEffect(() => {
      async function fetchUserEmail() {
          try {
              const email = await contactService.getCurrentUserEmail();
              setUserEmail(email);
          } catch (error) {
              console.error('Error getting current user email:', error);
          }
      }
      fetchUserEmail();
  }, []);

  

//   React.useEffect(() => {
//     const mapContainer = mapContainerRef.current;

//     if (mapContainer) {
//       const map = L.map(mapContainer).setView([33.5731, -5.7915], 6); // Set initial map view (Sefrou, Morocco)
//       map.attributionControl.remove();

//       // Define your SVG marker icons (replace with your actual SVG content)
//       const markerIcon1 = L.icon({
//         iconUrl: '/sites/CnexiaForEveryone/Assets/Pointeur.svg', // Replace with your SVG content
//         iconSize: [25, 40], // Adjust icon size as needed
//       });
      

//       const markerIcon2 = L.icon({
//         iconUrl: '/sites/CnexiaForEveryone/Assets/Pointeur.svg', // Replace with your SVG content
//         iconSize: [25, 40], // Adjust icon size as needed
//       });

//       // Add markers with SVG icons and popups
//       L.marker([33.992735, -6.719636], { icon: markerIcon1 }).addTo(map)
//         .bindPopup("<b>Cnexia Rabat</b><br>This is the first marker.");

//       L.marker([34.009555, -4.958780], { icon: markerIcon2 }).addTo(map)
//         .bindPopup("<b>Cnexia Fès</b><br>This is the second marker.");

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // ... (Add custom markers or layers if needed)
//     } else {
//       console.error('Map container element not yet available');
//     }
//   }, []);



      // Disable default controls
      //map.addControl(new maplibregl.NavigationControl(), 'top-right'); // add custom control if needed

      // Add custom pins
      



    return (
        <div className={styles.ContactUs_main}>
            <div className={styles.ContactUs_container}>
                <div className={styles.container}>
                    <div className={styles.left_map}>
                        <div  className={styles.map_container} >
                          <img src="/sites/CnexiaForEveryone/Assets/IdeaBox.svg" alt="" />
                        
                        </div>
                    </div>
                    <div className={styles.UpE_right}>
                        
                        
                        <div className={styles.contact_form}>
                            <div className={styles.Email}>
                                <p>
                                    Email
                                </p>
                                <input type="text" placeholder="Votre adresse e-mail" value={userEmail} disabled />
                            </div>
                            <div className={styles.textArea}>
                                <p>
                                    Message
                                </p>
                                <textarea
                                    className={styles.contactTextArea}
                                    placeholder="Contactez-nous et nous vous répondrons dans les meilleurs délais."
                                    value={newComment}
                                    onChange={handleCommentChange}
                                />
                            </div>
                            <div className={styles.SubBtn}>
                                <button className={styles.subCbtn} type="button" onClick={handleSubmit}>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
