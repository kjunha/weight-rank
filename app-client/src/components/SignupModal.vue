<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Signup</ion-title>
        <ion-buttons slot='end'>
          <ion-button @click='dismissModal'>Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class='ion-padding'>
      <h2>some contents</h2>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  modalController
} from '@ionic/vue';

export default {
  components: { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton },
  data() {
    return {};
  },
  methods: {
    dismissModal() {
      modalController.dismiss().then(() => {
        this.$emit('signupDidDismiss')
      })
    }
  }
};
</script>
