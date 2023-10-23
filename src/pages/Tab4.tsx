import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import Exercises from '../components/Exercises';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Divide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Exercises operation="/" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
