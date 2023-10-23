import React, { useState, useEffect } from 'react';
import {
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/react';
import "./Exercises.scss";

type Operation = '+' | '-' | '*' | '/'; // Define the valid operations

interface Exercise {
  problem: string;
  answer: number;
}

interface ExercisesProps {
  operation: Operation;
}

const generateRandomExercise = (operation: Operation): Exercise => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let problem;
  let answer;

  switch (operation) {
    case '+':
      problem = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case '-':
      problem = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case '*':
      problem = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    case '/':
      problem = `${num1} / ${num2}`;
      answer = num1 / num2;
      break;
    default:
      problem = 'Invalid operation';
      answer = 0;
  }

  return { problem, answer };
};

const Exercises: React.FC<ExercisesProps> = ({ operation }) => {
  const numExercises = 10;
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(numExercises).fill(''));
  const [results, setResults] = useState<boolean[]>(Array(numExercises).fill(false));

  useEffect(() => {
    const randomExercises = Array.from({ length: numExercises }, () =>
      generateRandomExercise(operation)
    );
    setExercises(randomExercises);
  }, [operation]);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newResults = exercises.map((exercise, index) => {
      const userAnswer = userAnswers[index];
      const correctAnswer = exercise.answer;
      return parseInt(userAnswer, 10) === correctAnswer;
    });
    setResults(() => newResults);
    setSubmitted(true);
  };

  return (
    <>
      <IonList>
        {exercises.map((exercise, index) => (
          <IonItem key={index} className="ion-no-padding">
            <div className="exercise">{exercise.problem} =</div>
            <IonInput
              value={userAnswers[index]}
              type="number"
              placeholder="result..."
              onIonInput={(e) =>
                handleAnswerChange(index, e.detail.value!)
              }
            />

            {submitted && (
              <div>
                {results[index] ? (
                  <span className="correct">✔</span>
                ) : (
                  <span className="incorrect">✘</span>
                )}
              </div>
            )}
          </IonItem>
        ))}
      </IonList>

      <IonButton expand="full" onClick={handleSubmit}>
        Submit
      </IonButton>
    </>
  );
};

export default Exercises;
