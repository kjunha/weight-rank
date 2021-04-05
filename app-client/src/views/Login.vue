<template>
  <ion-page>
    <ion-content>
      in progress
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent
} from '@ionic/vue';

export default {
  components: { IonPage, IonContent },
  mounted() {
    const service = this.$route.params.service
    const code = this.$route.query.code
    if(service && code) {
      this.appApi.getOauthAccessToken(service, code).then(res => {
        console.log(res)
        if(res.status == 200) {
          this.$router.push(`/main/bp`)
        }
      })
    }
  }
};
</script>