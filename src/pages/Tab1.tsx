import React, { useState, Fragment } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { connect as mqttConnect } from "mqtt"

const Tab1: React.FC = () => {


  //connect to our broker
  //IMPORTANT: you have to add "ws://" and the websockets port
  // use "ws://test.mosquitto.org:8080" for public broker
  let mqttClient = mqttConnect("wss://mqtt.wdaan.tools")
  //export MQTT
  mqttClient.on("connect", function () {
    // subscribe on a topic after connected
    mqttClient.subscribe("robbe")
    // send a message to test if the connection is working
    mqttClient.publish("robbe", "Connected")
  })
  mqttClient.on("message", function (topic, message) {
    // show received message
    console.log(topic, message.toString())
  })

  function Pin_GPIO26() {
    console.log("GPIO26 Hoog");
    mqttClient.publish("robbe", JSON.stringify({pin: 37}))
    //
    mqttClient.on("message", function (topic, message) {
      console.log(topic, message.toString())
    })
  }

  function Pin_GPIO19() {
    console.log("GPIO19 Hoog");
    mqttClient.publish("robbe", JSON.stringify({pin: 35}))
  }

  function Pin_clear(){
    mqttClient.publish("robbe", JSON.stringify({pin: 0}))
  }


  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Set Pins</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton type="button" onClick={() => Pin_GPIO26()} >Set Output Pin 37</IonButton>
        <IonButton type="button" onClick={() => Pin_GPIO19()} >Set Output Pin 35</IonButton>
        <IonButton type="button" onClick={() => Pin_clear()} >clear</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
