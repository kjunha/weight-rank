<template>
  <ion-page>
    <ion-content class='ion-padding'>
      <h1>WeightRank</h1>
      <h3>Worldwide Lifter Ranking</h3>
    </ion-content>
    <!--  z-index=1 covering drawer style  -->
    <div id='login-area'>
      <ion-button expand='block' color='dark' shape='rounded' @click='requestGithub()' id="loginbuttons">
        <ion-icon slot='icon-only' :icon='logoGithub'></ion-icon>
        Login with Github
      </ion-button>
      <ion-button expand='block' color='facebook' shape='rounded' @click='requestGithub()' id="loginbuttons">
        <ion-icon slot='icon-only' :icon='logoFacebook'></ion-icon>
        Login with Facebook
      </ion-button>
      <ion-button expand='block' color='google' shape='rounded' @click='requestGithub()' id="loginbuttons">
        <ion-icon slot='icon-only' :icon='logoGoogle'></ion-icon>
        Login with Google
      </ion-button>
      <ion-button expand='block' color='twitter' shape='rounded' @click='requestGithub()' id="loginbuttons">
        <ion-icon slot='icon-only' :icon='logoTwitter'></ion-icon>
        Login with Twitter
      </ion-button>
    </div>
  </ion-page>
</template>

<script>
  import { IonPage, IonContent, IonButton } from '@ionic/vue';
  import { logoGithub,logoFacebook,logoGoogle,logoTwitter } from 'ionicons/icons';
  import { Plugins } from '@capacitor/core';
  

  const { Browser } = Plugins;
  export default {
    components: { IonPage, IonContent, IonButton },
    data() {
      return {
        logoGithub,
        logoTwitter,
        logoFacebook,
        logoGoogle
      };
    },
    methods: {
      requestGithub() {
        this.userApi.getOauthIdentity('github').then(async res => {
          const url = res.data;
          console.debug(url)
          if (url) {
            await Browser.open({ url });
          }
        });
      }
    }
  };
</script>

<style>
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
  #login-area {
    z-index: 1;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.384);
    color: #000;
    top: 45%;
    height: 55%;
    width: 100%;
    padding: 25px;
    border-radius: 15px 15px 0 0;
    box-shadow: 0px -2px 4px #333;
  }

  #loginbuttons {
    margin: 20px;
  }

  .ion-padding {
    --background: url(https://images.unsplash.com/photo-1590771998996-8589ec9b5ac6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80) 0 0/100% 100% no-repeat fixed;
    background-size: cover;
    --color: white;
    font-family: 'NanumSquare', sans-serif;
    text-align: center;
  }

  .ion-padding h1 {
    margin-top: 15%;
    letter-spacing: 4.3px;
    font-size: 2.5rem;
    font-weight: 800;
  }

  .ion-padding h3 {
    letter-spacing: 1.4px;
    font-weight: 800;
  }

  :root {
  --ion-color-twitter: #1da1f2;
  --ion-color-twitter-rgb: 29,161,242;
  --ion-color-twitter-contrast: #ffffff;
  --ion-color-twitter-contrast-rgb: 0,0,0;
  --ion-color-twitter-shade: #1a8ed5;
  --ion-color-twitter-tint: #34aaf3;
}

.ion-color-twitter {
  --ion-color-base: var(--ion-color-twitter);
  --ion-color-base-rgb: var(--ion-color-twitter-rgb);
  --ion-color-contrast: var(--ion-color-twitter-contrast);
  --ion-color-contrast-rgb: var(--ion-color-twitter-contrast-rgb);
  --ion-color-shade: var(--ion-color-twitter-shade);
  --ion-color-tint: var(--ion-color-twitter-tint);
}

  :root {
    --ion-color-facebook: #4267b2;
    --ion-color-facebook-rgb: 66,103,178;
    --ion-color-facebook-contrast: #ffffff;
    --ion-color-facebook-contrast-rgb: 255,255,255;
    --ion-color-facebook-shade: #3a5b9d;
    --ion-color-facebook-tint: #5576ba;
  }

  .ion-color-facebook {
    --ion-color-base: var(--ion-color-facebook);
    --ion-color-base-rgb: var(--ion-color-facebook-rgb);
    --ion-color-contrast: var(--ion-color-facebook-contrast);
    --ion-color-contrast-rgb: var(--ion-color-facebook-contrast-rgb);
    --ion-color-shade: var(--ion-color-facebook-shade);
    --ion-color-tint: var(--ion-color-facebook-tint);
  }

  :root {
    --ion-color-google: #ffffff;
    --ion-color-google-rgb: 255,255,255;
    --ion-color-google-contrast: #000000;
    --ion-color-google-contrast-rgb: 0,0,0;
    --ion-color-google-shade: #e0e0e0;
    --ion-color-google-tint: #ffffff;
  }

  .ion-color-google {
    --ion-color-base: var(--ion-color-google);
    --ion-color-base-rgb: var(--ion-color-google-rgb);
    --ion-color-contrast: var(--ion-color-google-contrast);
    --ion-color-contrast-rgb: var(--ion-color-google-contrast-rgb);
    --ion-color-shade: var(--ion-color-google-shade);
    --ion-color-tint: var(--ion-color-google-tint);
  }
</style>

