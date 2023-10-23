import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';
import { useState } from 'react';
import Exercises from '../components/Exercises';

const Tab1: React.FC = () => {
  const exercises = [
    { problem: '1 + 3', answer: 4 },
    { problem: '5 + 10', answer: 15 },
    // Add more exercises here
  ];

  const [userAnswers, setUserAnswers] = useState(
    Array(exercises.length).fill(''),
  );

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Exercises operation="+" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
