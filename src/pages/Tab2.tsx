import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Exercises from '../components/Exercises';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Subtract</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Exercises operation="-" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
