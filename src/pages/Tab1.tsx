import React, { useState, Fragment } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { connect as mqttConnect } from "mqtt"

const Tab1: React.FC = () => {
  function test1() {
    console.log("test pin 10");
  }

  function test2() {
    console.log("test pin 11");

  }

  //connect to our broker
  //IMPORTANT: you have to add "ws://" and the websockets port
  // use "ws://test.mosquitto.org:8080" for public broker
  let mqttClient = mqttConnect("mqtt://test.mosquitto.org:8080/ws")
  //export MQTT
  function useMQTTMessages() {
    mqttClient.on("connect", function () {
      console.log("bjhdbkg");
      // subscribe on a topic after connected
      mqttClient.subscribe("robbe")
      // send a message to test if the connection is working
      mqttClient.publish("robbe", "Connected")
    })
    mqttClient.on("message", function (topic, message) {
      // show received message
      console.log(topic, message.toString())
    })
  }


  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton type="button" onClick={() => test1()} >Set Output Pin 10</IonButton>
        <IonButton type="button" onClick={() => test2()} >Set Output Pin 11</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
