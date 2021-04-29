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
        <p>다른 사람들과 운동 루틴을 공유하고 <br>내 랭크가 얼마나 되는지 알아보자</p>
        <div class="downloadlink1">
          <img src="@/assets/GooglePlay.png" alt="googlePlay" width="180px">
          <img src="@/assets/AppStore.png" alt="googlePlay" width="180px">
        </div>
      </div>
    </section>
    <section class="contents2">
      another contents2
    </section>
  </div>
</template>

<script>
export default {}
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
    width: 950px;
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px;
  }

  .contents1 {
    height: calc(100vh - 94px);
  }

  .main-contents {
    color: white;
    width: 950px;
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

</style>
