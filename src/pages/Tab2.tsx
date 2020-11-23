import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  function test1() {
    console.log("test pin 10");
  }

  function test2() {
    console.log("test pin 11");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton type="button" onClick={() => test1()} >Read  Pin 10</IonButton>
        <IonButton type="button" onClick={() => test2()} >Read  Pin 11</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
