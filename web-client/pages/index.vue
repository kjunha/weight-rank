<template>
  <div>
    <div class="carousel main-banner">
      <div v-if="!isMobile" class="carousel-inner pc-ci">
        <div class="banner-item">
          <h1 class="mb-3" style="font-weight: bold">
            나의 3대 운동은 <br />어느 정도일까?
          </h1>
          <h4 class="mb-3">
            다른 사람들과 운동 루틴을 공유하고 <br />내 랭크가 얼마나 되는지
            알아보세요!
          </h4>
          <div class="downloadlink1">
            <img
              src="@/assets/GooglePlay.png"
              alt="googlePlay"
              width="200em"
              @click="googlePlay()"
            />
            <img
              src="@/assets/AppStore.png"
              alt="googlePlay"
              width="200em"
              @click="appStore()"
            />
          </div>
        </div>
      </div>
      <div v-else class="carousel-inner mobile-ci">
        <div class="banner-item">
          <h5 class="mb-1" style="font-weight: bold">
            나의 3대 운동은 <br />어느 정도일까?
          </h5>
          <p class="mb-3" style="line-height: 1.08">
            다른 사람들과 운동 루틴을 공유하고 <br />내 랭크가 얼마나 되는지
            알아보세요!
          </p>
          <img
            class="d-inline-block"
            src="@/assets/GooglePlay.png"
            alt="googlePlay"
            width="80px"
            @click="googlePlay()"
          />
          <img
            class="d-inline-block"
            src="@/assets/AppStore.png"
            alt="googlePlay"
            width="80px"
            @click="appStore()"
          />
        </div>
      </div>
    </div>
    <section class="section-contents bg-lightblue h-25">
      <div class="container">
        <p class="pc-p-lg mb-3">넌 삼대 몇쳐?</p>
        <p>
          쇠질은 즐거워. 들때마다 짜릿해. <br />난 지금 3대 480드는데 조상님이
          조금만 더 도와주신다면 500클럽 들어갈 수 있을거같아. <br />다른
          사람들이랑 내 순위를 알 수 있으니까 더 자극되는거 같아!
        </p>
      </div>
    </section>
    <section class="section-contents container">
      <div class="d-flex w-75">
        <h2 class="text-info mr-3">01</h2>
        <div class="mr-3">
          <h2>내 순위를 알아보세요</h2>
          <p>
            내 3대 운동을 기록하고 <br />
            순위를 확인해 보세요. <br />
            지역별, 체육관 별로 내 순위를 확인할 수 있어요.
          </p>
        </div>
      </div>
      <img class="image" src="@/assets/rank.png" alt="app" />
    </section>
    <section class="section-contents container">
      <div class="d-flex w-75">
        <h2 class="text-info mr-3">02</h2>
        <div class="mr-3">
          <h2>수행할 운동을 계획해 보세요</h2>
          <p>
            편하게 운동을 계획하거나 <br />
            다른 사람이 짜놓은 계획표를 찾아보세요.
          </p>
        </div>
      </div>
      <img class="image" src="@/assets/rank.png" alt="app" />
    </section>
    <section class="section-contents container">
      <div class="d-flex w-75">
        <h2 class="text-info mr-3">03</h2>
        <div class="mr-3">
          <h2>내 운동을 공유해 보세요</h2>
          <p>
            운동은 같이 할 수록 재미있답니다. <br />
            다른 사람들의 운동도 볼 수 있어요.
          </p>
        </div>
      </div>
      <img class="image" src="@/assets/rank.png" alt="app" />
    </section>
  </div>
</template>
<script>
export default {
  layout: 'main',
  data() {
    return {
      testmsg: 'hello vue',
      isMobile: this.$device.isMobile,
      recordType: 'all',
    };
  },
  methods: {
    changeRecordType(event) {
      this.recordType = event.type;
    },
  },
};
</script>
<style scoped>
.bg-lightblue {
  background-color: rgb(235, 240, 252);
}

.section-contents {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 0;
}

.pc-p-lg {
  font-size: 1.5rem;
  font-weight: bold;
}

.carousel-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80),
  no-repeat;
  background-size: cover;
}

.pc-ci {
  width: 100vw;
  height: 100vh;
}

.mobile-ci {
  width: 100vw;
  height: 35vh;
}

.banner-item {
  width: 53%;
  color: white;
}

.image {
  width: 28%;
  height: auto;
}
</style>
