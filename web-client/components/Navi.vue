<template>
  <div :class="`navigation ${isMobile ? 'w-100' : 'm-25'}`">
    <Logo />
    <div v-if="!isMobile" class="menu">
      <ul class="menu-ul pc-menu-ul">
        <li class="pc-menu-li">
          <a href="#service" class="servicecss">서비스 소개</a>
        </li>
        <li class="pc-menu-li"><a href="#">채용</a></li>
        <li class="pc-menu-li"><a href="rank">랭킹</a></li>
        <li class="pc-menu-li"><a href="register">제휴문의</a></li>
        <li class="pc-menu-li"><a href="#">FAQ</a></li>
      </ul>
    </div>
    <div v-else class="mr-3">
      <b-button>
        <b-icon icon="list" v-b-toggle.side-menu></b-icon>
      </b-button>
      <b-sidebar
        id="side-menu"
        :no-close-on-backdrop='false'
      >
        <ul class="menu-ul">
          <li class="mobile-li p-3">
            <a href="#service" class="servicecss">서비스 소개</a>
          </li>
          <li class="mobile-li p-3"><a href="#">채용</a></li>
          <li class="mobile-li p-3"><a href="rank">랭킹</a></li>
          <li class="mobile-li p-3"><a href="#">제휴문의</a></li>
          <li class="mobile-li p-3"><a href="#">FAQ</a></li>
        </ul>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobile: this.$device.isMobile,
    };
  },
  mounted() {
    console.log('isMobile', this.isMobile);
  },
};
</script>
<style scoped>
.navigation {
  display: flex;
  position: absolute;
  top:0;
  left: 0;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
  padding: 0;
}
.m-25 {
  width: 55%;
  margin-left: 22%;
}

.menu {
  width: 600px;
  font-weight: 700;
  font-size: 18px;
}

.menu-ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.mobile-li {
  display: block;
  border-bottom: 1px solid #383a3e;
}

.mobile-li > a {
  text-decoration: none;
  color: #383a3e;
}

.pc-menu-ul {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}

.pc-menu-li:hover {
  transform: scale(1.2);
}

.pc-menu-li > a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.pc-menu-li > a:hover {
  color: tomato;
}

.servicecss {
  transition: 0.5s;
}
</style>
