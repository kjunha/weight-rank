<template>
  <ion-page>
    <ion-content class='ion-padding'>
      <div class='login-process'>
        <ion-spinner name='lines' :paused='spinnerPause'></ion-spinner>
        <h3>{{ loadingMsg }}</h3>
      </div>
      <ion-modal :is-open='isSignup'>
        <SignupModal :cache-key='code' @signup-did-dismiss='dismissSignup()' />
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonModal
} from '@ionic/vue';
import SignupModal from '../components/SignupModal';

export default {
  components: { IonPage, IonContent, IonModal, SignupModal },
  data() {
    return {
      isSignup: false,
      spinnerPause: false,
      loadingMsg: 'Logging In...',
      code: ''
    };
  },
  methods: {
    dismissSignup() {
      this.loadingMsg = 'Going Back...';
      this.isSignup = false;
      this.spinnerPause = false;
      this.$router.go(-1);
    }
  },
  mounted() {
    const service = this.$route.params.service;
    const code = this.$route.query.code;
    
    if (service && code) {
      this.appApi.getOauthAccessToken(service, code).then(res => {
        console.log(res);
        if (res.status === 200) {
          this.$router.push(`/main/bp`);
        } else if (res.status === 201) {
          this.isSignup = true;
          this.spinnerPause = true;
          this.code = res.data;
          console.log(res);
        }
      }).catch(() => {
        // this.$router.go(-1);
      });
    }
  }
};
</script>
<style>
.login-process {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

ion-spinner {
  width: 65px !important;
  height: 65px !important;
}
</style>
