<template>
  <div class="wholesome">
    <div class="main">
      <div class="landing"></div>
      <div class="top">
        <div class="logo">
          <Logo />
        </div>
        <div class="nav">
          <Navi />
        </div>
      </div>
    </div>

    <section class="contents1">
      <div class="main-contents">
        <h1 style="font-weight:700;">나의 3대 운동은 <br>어느 정도일까?</h1>
        <h4>다른 사람들과 운동 루틴을 공유하고 <br>내 랭크가 얼마나 되는지 알아보자</h4>
        <div class="downloadlink1">
          <img src="@/assets/GooglePlay.png" alt="googlePlay" width="180px" @click="googlePlay()">
          <img src="@/assets/AppStore.png" alt="googlePlay" width="180px" @click="appStore()">
        </div>
      </div>
    </section>

    <section class="contents2">
      <div class="paragraph1">
        <h3 style="font-weight:700;">너는 삼대 몇치냐?</h3>
        <h4>쇠질은 즐거워. 들때마다 짜릿해. <br>난 지금 3대 480드는데 조상님이 조금만 더 도와주신다면 500클럽 들어갈 수 있을거같아. <br>다른 사람들이랑 내 순위를 알 수 있으니까 더 자극되는거 같아!</h4>
      </div>
    </section>

    <section class="contents3">
      <div class="div1">
        <div class="div2">
          <h1 style="font-weight: 700; font-size: 3rem; color: rgb(156, 156, 156);">01</h1>
          <div class="paragraph2">
            <h1>내 순위를 알아보세요</h1>
            <h5>내 3대 운동을 기록하고 <br>순위를 확인해 보세요. <br>지역별, 체육관 별로 내 순위를 확인할 수 있어요.</h5>
          </div>
        </div>
        <div class="photo">
          <img src="@/assets/rank.png" alt="app">
        </div>
      </div>
    </section>

    <section class="contents3">
      <div class="div1">
        <div class="div2">
          <h1 style="font-weight: 700; font-size: 3rem; color: rgb(156, 156, 156);">02</h1>
          <div class="paragraph2">
            <h1>내 순위를 알아보세요</h1>
            <h5>내 3대 운동을 기록하고 <br>순위를 확인해 보세요. <br>지역별, 체육관 별로 내 순위를 확인할 수 있어요.</h5>
          </div>
        </div>
        <div class="photo">
          <img src="@/assets/rank.png" alt="app">
        </div>
      </div>
    </section>

    <section class="contents3">
      <div class="div1">
        <div class="div2">
          <h1 style="font-weight: 700; font-size: 3rem; color: rgb(156, 156, 156);">03</h1>
          <div class="paragraph2">
            <h1>내 순위를 알아보세요</h1>
            <h5>내 3대 운동을 기록하고 <br>순위를 확인해 보세요. <br>지역별, 체육관 별로 내 순위를 확인할 수 있어요.</h5>
          </div>
        </div>
        <div class="photo">
          <img src="@/assets/rank.png" alt="app">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods:{
    toHere(url) {
      location.replace(url)
    },
    googlePlay() {
      location.replace('https://play.google.com/store')
    },
    appStore() {
      location.replace('https://www.apple.com/kr/app-store/')
    }
  }
}
</script>

<style>
  .main {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;

  }

  .landing {
    z-index: -1000;
    position: absolute;
    top: 0;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 992px) {
    .landing {
      height: calc(100vh);
      background-image: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
      background-position: 50%;
    }
  }

  .top { 
    height: 90px;
    width: 1050px;
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px;
  }

  .contents1 {
    height: calc(100vh - 94px);
  }

  .main-contents {
    color: white;
    width: 1050px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .downloadlink {
    width: inherit;
    display: flex;
    flex-direction: row;
  }

  .contents2 {
    margin-top: 0;
    height: calc(35vh);
    background-color: rgb(235, 240, 252);
  }
  .paragraph1 {
    width: 1050px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .div1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 1050px;
    margin: 0 auto;
  }

  .paragraph2 {
    margin-left: 25px;
  }
  
  .paragraph2 h1 {
    font-weight: 800;
  }

  .contents3 {
    height: calc(100vh);
  }

  .contents3 img {
    width: 500px; 
  }

</style>
