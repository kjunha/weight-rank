<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Create New Account</ion-title>
        <ion-buttons slot='end'>
          <ion-button @click='dismissModal'>Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class='ion-padding'>
      <form class='signup-form'>
        <h2>Welcome!</h2>
        <ion-label>User Name</ion-label>
        <ion-input ref='userName' placeholder='This name will represent you in the app'></ion-input>
        <ion-label>User Profile</ion-label>
        <ion-input accept='file'></ion-input>
        <ion-button expand='block' @click='registerUser()'>Register</ion-button>
      </form>
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
  props: {
    cacheKey: String
  },
  data() {
    return {};
  },
  methods: {
    dismissModal() {
      this.userApi.undoSignup(this.cacheKey);
      modalController.dismiss().then(() => {
        this.$emit('signupDidDismiss');
      });
    },
    registerUser() {
      // TODO: Needs Validation
      const userName = this.$refs.userName.value;
      const userProfile = '';
      this.userApi.registerNewUser(this.cacheKey, userName, userProfile)
        .then(async res => {
          console.log(res);
          if (res.status == 200) {
            let token = res.data.token;
            this.$store.commit('setIdentity', token);
            await modalController.dismiss()
            this.$router.push(`/main/bp`);
          }
        });
    }
  }
};
</script>
<style>
ion-input {
  background-color: white;
  border-bottom: 2px solid;
  margin-bottom: 35px;
}
</style>
