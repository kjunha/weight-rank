<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h2>image view</h2>
    </ion-content>
    <!--  z-index=1 covering drawer style  -->
    <div id="login-area">
      some text
      <ion-button expand="block" color="dark" shape="rounded">
        <ion-icon slot="icon-only" :icon="logoGithub"></ion-icon> Login with Github
      </ion-button>
    </div>
  </ion-page>
</template>
<script>
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { logoGithub } from 'ionicons/icons';

export default {
  components: { IonPage, IonContent, IonButton },
  data() {
    return {
      logoGithub
    }
  },
};
</script>
<style>
#login-area {
  z-index: 1;
  position: absolute;
  background-color: #fff;
  color: #000;
  top: 45%;
  height: 55%;
  width: 100%;
  padding: 25px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px #333;
}
</style>

